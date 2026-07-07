# RaktaSetu Deployment Guide

## Live Frontend
**URL**: https://llMr-Sweetll.github.io/raktasetu-app/

The frontend is deployed to GitHub Pages from the `gh-pages` branch.

## Backend Deployment

The backend requires a Node.js server with Socket.io support. Deploy to one of:

### Option 1: Render (One-Click)
Click the button in the README or use the `backend/render.yaml` blueprint.

### Option 2: Fly.io
```bash
cd backend
flyctl launch --dockerfile Dockerfile
```

### Option 3: Railway / Heroku / VPS
```bash
cd backend
npm install
npm start
```

**Required Environment Variables:**
- `DATABASE_URL` — Neon Postgres connection string
- `JWT_SECRET` — Random secret for JWT signing
- `JWT_EXPIRES_IN` — e.g. `7d`
- `PORT` — Server port (defaults to 3001)

## Mobile Builds

### iOS
```bash
cd frontend
npm run build
npx cap sync ios
npx cap open ios
# Build in Xcode or use: xcodebuild
```

### Android
```bash
cd frontend
npm run build
npx cap sync android
npx cap open android
# Build in Android Studio or use: ./gradlew assembleRelease
```

## Demo Credentials

| Role | Phone / Email | Password |
|------|--------------|----------|
| Donor | `+919876543210` | `password123` |
| Donor | `+919876543211` | `password123` |
| Hospital | `+918312456789` | `password123` |

## API Endpoints

- `POST /api/auth/login` — Phone/email + password login
- `POST /api/auth/register` — New donor/hospital registration
- `GET /api/auth/me` — Current user profile
- `GET /api/donor/dashboard` — Donor home stats + nearby requests
- `PATCH /api/donor/on-call` — Toggle availability
- `GET /api/donor/requests` — List nearby active requests
- `POST /api/donor/respond/:id` — Accept/decline request
- `POST /api/donor/arrived/:id` — Mark arrival
- `GET /api/donor/credits` — Credit balance + history
- `GET /api/donor/history` — Donation history
- `PATCH /api/donor/profile` — Update profile
- `GET /api/hospital/dashboard` — Hospital live board
- `POST /api/hospital/requests` — Create new blood request
- `GET /api/hospital/requests/:id` — Request detail
- `PATCH /api/hospital/requests/:id` — Update request status
- `POST /api/hospital/verify-donation` — Verify donation + award credits
- `GET /api/hospital/donors` — Nearby on-call donors
- `GET /health` — Health check

## Socket.io Events

- `donor:go-on-call` — Donor toggles availability
- `donor:go-off-call` — Donor goes off-call
- `hospital:new-request` — New blood request created
- `donor:respond` — Donor accepts/declines
- `donor:arrived` — Donor arrives at hospital
- `hospital:verify` — Hospital verifies donation

## Database Schema

10 tables: `users`, `hospitals`, `blood_requests`, `donor_responses`, `donations`, `credits`, `family_members`, `notifications`, `addresses`, `sessions`.

Seed data includes 6+ donors, 3+ hospitals, and 8+ blood requests in the Hubballi area.
