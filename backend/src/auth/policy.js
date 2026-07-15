const OPERATIONAL_PREFIXES = ['donor.', 'hospital.'];

export function authorize({ actor, action, resource = {} }) {
  if (!actor) return { allowed: false, status: 401, code: 'AUTHENTICATION_REQUIRED' };
  if (actor.account_status !== 'active') {
    return { allowed: false, status: 403, code: 'ACCOUNT_NOT_ACTIVE' };
  }

  if (actor.role === 'admin') {
    return action.startsWith('admin.')
      ? { allowed: true }
      : { allowed: false, status: 403, code: 'ROLE_DENIED' };
  }

  if (actor.role === 'donor' && action.startsWith('donor.')) {
    if (resource.user_id && resource.user_id !== actor.id) {
      return { allowed: false, status: 404, code: 'RESOURCE_NOT_FOUND' };
    }
    return { allowed: true };
  }

  if (actor.role === 'hospital' && action.startsWith('hospital.')) {
    if (actor.approval_status !== 'approved' || !actor.hospital_id) {
      return { allowed: false, status: 403, code: 'HOSPITAL_APPROVAL_REQUIRED' };
    }
    if (resource.hospital_id && resource.hospital_id !== actor.hospital_id) {
      return { allowed: false, status: 404, code: 'RESOURCE_NOT_FOUND' };
    }
    return { allowed: true };
  }

  if (OPERATIONAL_PREFIXES.some((prefix) => action.startsWith(prefix))) {
    return { allowed: false, status: 403, code: 'ROLE_DENIED' };
  }
  return { allowed: false, status: 403, code: 'ACTION_DENIED' };
}

export function requireResource(action, resourceLoader) {
  return async (req, res, next) => {
    try {
      const resource = await resourceLoader(req);
      if (!resource) {
        return res.status(404).json({ success: false, error: { code: 'RESOURCE_NOT_FOUND', message: 'Resource not found' } });
      }
      const decision = authorize({ actor: req.user, action, resource });
      if (!decision.allowed) {
        return res.status(decision.status).json({
          success: false,
          error: { code: decision.code, message: decision.status === 404 ? 'Resource not found' : 'Access denied' },
        });
      }
      req.resource = resource;
      return next();
    } catch (error) {
      return next(error);
    }
  };
}
