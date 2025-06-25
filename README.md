#  Vehicle Rental Form – Full Stack Project

This is a full-stack, step-based vehicle booking form built as part of a technical test.
It uses **React**, **Bootstrap**, **Framer Motion** on the frontend and **Express**, **PostgreSQL**, and **Prisma** on the backend.

---

##Features

* Multi-step booking form:

  * Step 1: Enter Name
  * Step 2: Select Wheels (2 or 4)
  * Step 3: Vehicle Type (filtered by wheels)
  * Step 4: Vehicle Model (filtered by type)
  * Step 5: Date Range + Submit
* Dynamic data fetching from database (via Prisma)
* Step validation + alerts
* Date overlap validation to prevent double bookings
* Final success confirmation
* Elegant UI (gradient, animated transitions, progress indicators)

---

## Folder Structure

```
vehicle-rental-form/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── controllers/
│   │   │   └── index.js
│   │   ├── routes/
│   │   │   └── index.js
│   └── app.js
│
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── StepWrapper.jsx
│       │   └── steps/
│       │       ├── StepName.jsx
│       │       ├── StepWheels.jsx
│       │       ├── StepVehicleType.jsx
│       │       ├── StepVehicleModel.jsx
│       │       └── StepDateRange.jsx
│       ├── services/
│       │   └── api.js
│       └── App.js
```

---

## ⚙️ Setup Instructions

### Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed  # if seed defined
npm run dev
```

Set your environment variable in `.env`:

```
DATABASE_URL=postgresql://postgres:1234@localhost:5432/vehicle_rental
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

##  API Endpoints

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| GET    | `/api/vehicle-types` | Get vehicle types by wheels    |
| GET    | `/api/vehicles`      | Get vehicles by vehicleType ID |
| POST   | `/api/bookings`      | Create a new booking           |

---

##  Booking Confirmation

After the final form step:

* User sees a **confirmation screen** with:

  * Vehicle name
  * Booking start and end date
  * Reference ID from database

---

## 🔧 Tech Stack

* Frontend: React, Bootstrap, Framer Motion
* Backend: Node.js, Express
* Database: PostgreSQL
* ORM: Prisma
* API Calls: Axios

---

## 📞 Support

If you need help, reach out to the project owner.

---
Preview of my design 
<img width="1510" alt="Screenshot 2025-06-25 at 10 55 08 AM" src="https://github.com/user-attachments/assets/9c154353-db5b-424a-8cf5-7d7fdfe4b621" />

**Author**: \N.Yashaswi
**Date**: June 2025
