## ✅ Final Deliverables Checklist

### ✅ Codebase

* [ ] Backend API (all required endpoints implemented)
* [ ] Frontend SPA (filters, search, and results table) pagination, responsive UI.

### ✅ Hosting

* [ ] **Live demo link** (Netlify / Render )

### ✅ README File (you can copy and adjust the content below)

---

## 📄 README.md Template

# Insurance Policy Finder

This is a full-stack web application that allows users to browse, search, filter, and sort a list of insurance policies.

## 🔗 Live Demo

- [Live Demo](https://github.com/Kharthie/Full-Stack-Take-Home-Challenge---Frontend)

## 📦 Repositories

- [Frontend Repo](https://github.com/Kharthie/Full-Stack-Take-Home-Challenge---Frontend)
- [Backend Repo](https://github.com/Kharthie/Full-Stack-Take-Home-Challenge---Backend)


## 🛠 Tech Stack

- **Frontend**: Angular
- **Backend**: Node.js, Express, JSON
- **Deployment**: Netlify (Frontend), Render (Backend)

## 📦 Features

- View all insurance policies
- Search policies by name (partial matches supported)
- Filter by:
  - Premium range
  - Policy type (Term Life, Health, Vehicle)
  - Minimum coverage
- Sort by premium (ascending or descending)
- Pagination and empty state messages

---

## 🧑‍💻 Setup Instructions

### Backend

cd backend
npm install
node server.js (or) npm start

API is served at: `http://localhost:3000`

### Frontend

cd frontend
npm install
npm start

App runs at: `http://localhost:4200`

---

## 📊 API Endpoints

* `GET /policies` - Fetch all policies
* `GET /policies?search=health` - Search by name
* `GET /policies?minPremium=2000&maxPremium=5000&type=Health&minCoverage=300000&sort=asc` - Filter & sort

---

## ✅ Improvements & Enhancements (Bonus)

* ✅ Responsive design
* ✅ Pagination
* ✅ Input validation and error handling
* ✅ Empty result feedback

---
