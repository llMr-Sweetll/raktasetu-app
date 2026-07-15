#!/bin/bash
# Usage: ./test_login.sh [API_BASE]
# Example: ./test_login.sh https://your-app.up.railway.app
API_BASE="${1:-http://localhost:3001}"
curl -s -X POST "${API_BASE}/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"phone":"+919876543210","password":"password123"}' | python3 -m json.tool
