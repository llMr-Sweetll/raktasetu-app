# RaktaSetu — Blood Donation Platform

> **Connect. Donate. Save Lives.**

A complete, working cross-platform mobile application for blood donation management. Built for donors, hospitals, and blood banks with real-time emergency matching, digital credits, and QR-based verification.

---

## What This Is

RaktaSetu ("Blood Bridge" in Sanskrit) is a digital platform that bridges the gap between blood donors and hospitals in need. It consists of:

- **Donor Mobile App** — Register, go on-call, receive emergency pings, donate, earn credits
- **Hospital Console** — Create requests, track donors in real-time, verify donations via QR code
- **Real-time Matching** — Socket.io-powered instant notifications between hospitals and compatible donors
- **Credit System** — Digital replacement for donor cards; 100 credits = 1 unit waived for you or family

---

## Architecture

```
raktasetu-app/
├── backend/          # Express.js + Socket.io API
│   ├── src/
│   │   ├── server.js          # Main server + Socket.io
│   │   ├── db.js              # Neon Postgres connection
│   │   ├── middleware/
│   │   │   └── auth.js        # JWT authentication
│   │   └── routes/
│   │       ├── auth.js        # Login, register, profile
│   │       ├── donor.js       # Donor operations
│   │       ├── hospital.js    # Hospital console
│   │       └── admin.js       # Admin utilities
│   ├── .env                   # Environment variables
│   └── package.json
├── frontend/       # React 18 + Vite mobile app
│   ├── src/
│   │   ├── screens/           # All app screens
│   │   ├── components/          # Shared UI components
│   │   ├── hooks/               # useAuth, useSocket
│   │   ├── api/                 # Axios client
│   │   └── App.jsx              # Router + design tokens
│   ├── public/                  # PWA assets
│   ├── capacitor.config.ts      # Mobile app config
│   └── package.json
└── plan.md                      # Full specification
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Vite 5, React Router 6, Leaflet, Socket.io-client |
| **Backend** | Node.js 20, Express 4, Socket.io 4, bcryptjs, JWT |
| **Database** | Neon Postgres (serverless) |
| **Mobile** | Capacitor 6 (wraps web app for iOS/Android) |
| **Maps** | OpenStreetMap via Leaflet (free, no API key) |
| **QR** | qrcode.react (generate), html5-qrcode (scan) |

---

## Quick Start

### Prerequisites
- Node.js 20+
- A Neon Postgres database (or any PostgreSQL)

### 1. Clone & Setup
```bash
git clone <repo>
cd raktasetu-app
```

### 2. Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your DATABASE_URL and JWT_SECRET
npm install
npm start        # Server runs on http://localhost:3001
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev      # Dev server on http://localhost:5173
```

### 4. Mobile Build (iOS/Android)
```bash
cd frontend
npm run build
npx cap sync
npx cap open ios     # or android
```

---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register donor or hospital |
| POST | `/api/auth/login` | Login with phone/email + password |
| GET | `/api/auth/me` | Current user profile |

### Donor
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/donor/dashboard` | Home stats + nearby requests |
| PATCH | `/api/donor/on-call` | Toggle availability |
| GET | `/api/donor/requests` | Nearby compatible requests |
| POST | `/api/donor/respond/:id` | Accept/decline request |
| POST | `/api/donor/arrived/:id` | Mark arrived at hospital |
| GET | `/api/donor/credits` | Credit balance + ledger |
| GET | `/api/donor/history` | Donation history |
| PATCH | `/api/donor/profile` | Update profile |

### Hospital
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hospital/dashboard` | Live board with stats |
| POST | `/api/hospital/requests` | Create blood request |
| GET | `/api/hospital/requests/:id` | Request detail |
| PATCH | `/api/hospital/requests/:id` | Update status |
| POST | `/api/hospital/verify-donation` | Verify + award credits |
| GET | `/api/hospital/donors` | Nearby on-call donors |

### Socket.io Events
| Event | Direction | Description |
|-------|-----------|-------------|
| `donor:go-on-call` | Donor → Server | Broadcast availability |
| `hospital:new-request` | Hospital → Server | Ping compatible donors |
| `donor:respond` | Donor → Server | Accept/decline notification |
| `donor:arrived` | Donor → Server | Arrival confirmation |
| `hospital:verify` | Hospital → Server | Donation verified |

---

## Blood Compatibility Matrix

| Recipient | Compatible Donors |
|-----------|-------------------|
| O- | O- |
| O+ | O-, O+ |
| A- | O-, A- |
| A+ | O-, O+, A-, A+ |
| B- | O-, B- |
| B+ | O-, O+, B-, B+ |
| AB- | O-, A-, B-, AB- |
| AB+ | O-, O+, A-, A+, B-, B+, AB-, AB+ |

**Rare groups** (O-, AB-) auto-widen search radius to 25km.

---

## Design System

- **Display Font**: Anek Latin (Indian typeface, Kannada sibling available)
- **Body Font**: Public Sans (designed for government digital services)
- **Primary**: Oxblood `#7A1626`
- **Emergency**: Arterial `#C8102E`
- **Success**: Leaf `#0F6B4A`
- **Dark Console**: Console `#14161C`
- **Background**: Porcelain `#F5F3F0`

---

## Demo Accounts

| Role | Phone | Password |
|------|-------|----------|
| Donor | `+919876543210` | `password123` |
| Donor | `+919876543211` | `password123` |
| Hospital | `+918312456789` | `password123` |

---

## License

MIT
