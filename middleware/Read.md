
Client Request
     ↓
Middleware 1
     ↓
Middleware 2
     ↓
Route Handler
     ↓
Response
















Request
   ↓
Logger
   ↓ next()
Authentication
   ↓ next()
Route Handler
   ↓
Response


Request
   ↓
Auth Middleware
   ↓
Authenticated? ── NO ──→ 401 Response
   │
  YES
   ↓
next()
   ↓
Profile Controller


#Folder Structure:
src/
├── middleware/
│   ├── logger.middleware.js
│   └── auth.middleware.js
│
├── routes/
│   └── user.routes.js
│
├── controllers/
│   └── user.controller.js
│
└── app.js