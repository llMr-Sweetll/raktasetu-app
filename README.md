# RaktaSetu — Blood Donation Platform

> **Connect. Donate. Save Lives.**
> A cross-platform blood donation matching platform for donors, hospitals, and administrators.

## Live Frontend

**GitHub Pages**: https://llMr-Sweetll.github.io/raktasetu-app/

The frontend is a production React 18 + Vite PWA. Works on mobile, tablet, and desktop.

## Quick Deploy Backend (2 minutes)

Choose one platform and click deploy:

### Option A: Render (Recommended — Free Tier)

1. Go to [render.com](https://render.com) and sign up with GitHub
2. Click **New +** → **Blueprint**
3. Connect your GitHub repo `llMr-Sweetll/raktasetu-app`
4. Select the `backend/render.yaml` blueprint
5. Add environment variables:
   - `DATABASE_URL` — your Neon Postgres connection string
   - `JWT_SECRET` — any random string (e.g., `openssl rand -base64 32`)
   - `JWT_EXPIRES_IN` — `7d`
6. Click **Apply**

Render will build from the `Dockerfile` and deploy automatically.

### Option B: Railway (Free Tier)

1. Go to [railway.app](https://railway.app) and sign up with GitHub
2. Click **New Project** → **Deploy from GitHub repo**
3. Select `llMr-Sweetll/raktasetu-app`
4. Set the **Root Directory** to `backend/`
5. Add environment variables (same as above)
6. Deploy

### Option C: Fly.io (Free Tier — $5 credit)

```bash
cd backend
flyctl launch --dockerfile Dockerfile
# Follow prompts, set env vars
flyctl secrets set DATABASE_URL="your-neon-url" JWT_SECRET="your-secret"
```

### Option D: Any VPS / Docker

```bash
cd backend
docker build -t raktasetu-backend .
docker run -p 3001:3001 \
  -e DATABASE_URL="your-neon-url" \
  -e JWT_SECRET="your-secret" \
  -e JWT_EXPIRES_IN="7d" \
  raktasetu-backend
```

## After Backend Deploy

1. Copy your backend URL (e.g., `https://raktasetu-api.onrender.com`)
2. Go to `frontend/src/App.jsx` line 59
3. Change `API_URL` to your backend URL:
   ```javascript
   export const API_URL = 'https://your-backend-url/api';
   ```
4. Rebuild and redeploy frontend:
   ```bash
   cd frontend
   npm run build
   # Push dist/ folder to gh-pages branch
   ```

## Demo Credentials

| Role | Phone / Email | Password |
|------|--------------|----------|
| Donor | `+919876543210` | `password123` |
| Donor | `+919876543211` | `password123` |
| Hospital | `+918312456789` | `password123` |
| Admin | `admin@raktasetu.in` | `password123` |

## Features

### Donor App
- **On-call toggle** — donors signal availability with a single tap
- **Emergency pings** — real-time blood requests from nearby hospitals
- **GPS matching** — haversine distance + blood compatibility matrix
- **Credits system** — earn 100 credits per verified donation, redeem for family
- **Donation history** — complete ledger with hospital, date, credits
- **Profile** — Aadhaar verification status, ping radius, eligibility tracker

### Hospital Console
- **Live board** — real-time request tracking with donor response counts
- **New request** — broadcast to compatible on-call donors within radius
- **Verify donor** — QR scan or manual ref code entry, instant credit issuance
- **Stats** — pinged / accepted / arrived / collected progress bars

### Admin Dashboard
- **Platform analytics** — total donors, hospitals, active requests, credits
- **User management** — view all donors and hospitals with verification status
- **Request monitoring** — track all blood requests across the platform

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, React Router (HashRouter), Capacitor 6 |
| Backend | Node.js, Express 4, Socket.io, JWT, bcryptjs |
| Database | PostgreSQL 15 (Neon Serverless) |
| Mobile | iOS/Android via Capacitor (Xcode/Android Studio) |
| Hosting | GitHub Pages (frontend), Render/Railway/Fly.io (backend) |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Phone/email + password login |
| POST | `/api/auth/register` | New donor/hospital registration |
| GET | `/api/auth/me` | Current user profile |
| GET | `/api/donor/dashboard` | Donor home stats + nearby requests |
| PATCH | `/api/donor/on-call` | Toggle availability |
| GET | `/api/donor/requests` | List nearby active requests |
| POST | `/api/donor/respond/:id` | Accept/decline request |
| POST | `/api/donor/arrived/:id` | Mark arrival at hospital |
| GET | `/api/donor/credits` | Credit balance + history |
| GET | `/api/donor/history` | Donation history |
| PATCH | `/api/donor/profile` | Update profile/location |
| GET | `/api/hospital/dashboard` | Hospital live board |
| POST | `/api/hospital/requests` | Create new blood request |
| GET | `/api/hospital/requests` | Search by ref code |
| GET | `/api/hospital/requests/:id` | Request detail |
| PATCH | `/api/hospital/requests/:id` | Update request status |
| POST | `/api/hospital/verify-donation` | Verify donation + award credits |
| GET | `/api/hospital/donors` | Nearby on-call donors |
| GET | `/api/admin/users` | List all users |
| GET | `/api/admin/requests` | List all blood requests |
| GET | `/api/admin/stats` | Platform-wide statistics |
| GET | `/health` | Health check |

## Socket.io Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `donor:go-on-call` | Donor → Server | Donor toggles availability |
| `donor:go-off-call` | Donor → Server | Donor goes off-call |
| `hospital:new-request` | Hospital → Server | New blood request created |
| `donor:respond` | Donor → Server | Donor accepts/declines |
| `donor:arrived` | Donor → Server | Donor arrives at hospital |
| `hospital:verify` | Hospital → Server | Hospital verifies donation |
| `blood-request` | Server → Donor | New request pinged to donor |
| `donor:available` | Server → Hospital | Donor came on-call nearby |
| `donor:unavailable` | Server → Hospital | Donor went off-call nearby |
| `donor:response` | Server → Hospital | Donor accepted/declined |
| `donor:arrived` | Server → Hospital | Donor marked arrival |
| `donation:verified` | Server → Donor | Donation verified, credits issued |

## Database Schema

10 tables: `users`, `hospitals`, `blood_requests`, `donor_responses`, `donations`, `credits`, `family_members`, `notifications`, `addresses`, `sessions`.

## Blood Compatibility Matrix

```
O-  → O-
O+  → O-, O+
A-  → O-, A-
A+  → O-, O+, A-, A+
B-  → O-, B-
B+  → O-, O+, B-, B+
AB- → O-, A-, B-, AB-
AB+ → All groups
```

## Mobile Builds

### iOS
```bash
cd frontend
npm run build
npx cap sync ios
npx cap open ios
```

### Android
```bash
cd frontend
npm run build
npx cap sync android
npx cap open android
```

## Development

```bash
# Clone
git clone https://github.com/llMr-Sweetll/raktasetu-app.git
cd raktasetu-app

# Backend
cd backend
cp .env.example .env
# Edit .env with your DATABASE_URL, JWT_SECRET, JWT_EXPIRES_IN
npm install
npm start

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:3001

## License

MIT
