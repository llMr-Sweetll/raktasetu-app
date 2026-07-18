#!/bin/bash
# Smoke-test admin email login against a RaktaSetu API base URL.
#
# Usage:
#   RAKTASETU_EMAIL='ops@example.org' RAKTASETU_PASSWORD='...' ./test_admin.sh [API_BASE]
#   # or shorthand:
#   EMAIL='ops@example.org' PASSWORD='...' ./test_admin.sh [API_BASE]
#
# Never commit credentials. Example: ./test_admin.sh https://your-app.up.railway.app
set -euo pipefail
API_BASE="${1:-http://localhost:3001}"
EMAIL="${RAKTASETU_EMAIL:-${EMAIL:-}}"
PASSWORD="${RAKTASETU_PASSWORD:-${PASSWORD:-}}"

if [[ -z "$EMAIL" || -z "$PASSWORD" ]]; then
  echo "Set RAKTASETU_EMAIL and RAKTASETU_PASSWORD (or EMAIL / PASSWORD)." >&2
  exit 1
fi

BODY=$(EMAIL="$EMAIL" PASSWORD="$PASSWORD" python3 -c 'import json,os; print(json.dumps({"email":os.environ["EMAIL"],"password":os.environ["PASSWORD"]}))')

curl -s -X POST "${API_BASE}/api/auth/login" \
  -H "Content-Type: application/json" \
  -d "$BODY" | python3 -m json.tool
