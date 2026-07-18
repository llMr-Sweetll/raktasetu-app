#!/bin/bash
# Smoke-test donor (or phone) login against a RaktaSetu API base URL.
#
# Usage:
#   RAKTASETU_EMAIL='you@example.com' RAKTASETU_PASSWORD='...' ./test_login.sh [API_BASE]
#   # or shorthand:
#   EMAIL='you@example.com' PASSWORD='...' ./test_login.sh [API_BASE]
#
# Phone login: set RAKTASETU_PHONE (or PHONE) instead of email.
# Never commit credentials. Example: ./test_login.sh https://your-app.up.railway.app
set -euo pipefail
API_BASE="${1:-http://localhost:3001}"
EMAIL="${RAKTASETU_EMAIL:-${EMAIL:-}}"
PASSWORD="${RAKTASETU_PASSWORD:-${PASSWORD:-}}"
PHONE="${RAKTASETU_PHONE:-${PHONE:-}}"

if [[ -z "$PASSWORD" ]]; then
  echo "Set RAKTASETU_PASSWORD (or PASSWORD). Optional: RAKTASETU_EMAIL / RAKTASETU_PHONE." >&2
  exit 1
fi
if [[ -z "$EMAIL" && -z "$PHONE" ]]; then
  echo "Set RAKTASETU_EMAIL (or EMAIL) or RAKTASETU_PHONE (or PHONE)." >&2
  exit 1
fi

if [[ -n "$EMAIL" ]]; then
  BODY=$(EMAIL="$EMAIL" PASSWORD="$PASSWORD" python3 -c 'import json,os; print(json.dumps({"email":os.environ["EMAIL"],"password":os.environ["PASSWORD"]}))')
else
  BODY=$(PHONE="$PHONE" PASSWORD="$PASSWORD" python3 -c 'import json,os; print(json.dumps({"phone":os.environ["PHONE"],"password":os.environ["PASSWORD"]}))')
fi

curl -s -X POST "${API_BASE}/api/auth/login" \
  -H "Content-Type: application/json" \
  -d "$BODY" | python3 -m json.tool
