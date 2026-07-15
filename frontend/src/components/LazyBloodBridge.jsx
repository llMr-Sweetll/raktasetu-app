import React, { lazy, Suspense } from 'react';

const BloodBridgeScene = lazy(() => import('./BloodBridgeScene.jsx'));

export default function LazyBloodBridge() {
  return (
    <Suspense
      fallback={(
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 40%, #3d0a14 0%, #0a0506 70%)',
          }}
        />
      )}
    >
      <BloodBridgeScene />
    </Suspense>
  );
}
