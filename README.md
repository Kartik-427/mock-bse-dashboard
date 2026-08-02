# 📈 Arham Fintech Dashboard


## Overview

Arham Fintech Dashboard is a full-stack MERN application that simulates a stock exchange data synchronization system.

The application periodically fetches stock market data from a mock BSE API, synchronizes it with MongoDB, calculates employee incentives, and provides a real-time dashboard using Socket.IO.

The project demonstrates backend synchronization, REST APIs, real-time communication, MongoDB integration, and full-stack deployment using Render and Vercel.




## ⭐ Project Highlights

- Full-stack MERN application
- Mock Stock Exchange (BSE) data synchronization
- Automatic sync every 60 seconds
- Real-time updates using Socket.IO
- MongoDB Atlas integration
- RESTful API architecture
- Cloud deployment using Render and Vercel
- Production-ready environment variable configuration



## ✨ Features

- 📊 Dashboard for monitoring stock exchange data
- 👥 Client Management
- 💹 Trade Management
- 👨‍💼 Employee Management
- 💰 Employee Incentive Calculation
- 🔄 Automatic data synchronization every 60 seconds
- ⚡ Real-time dashboard updates using Socket.IO
- 🗄️ MongoDB data persistence
- 🌐 RESTful APIs
- ☁️ Backend deployed on Render
- 🚀 Frontend deployed on Vercel


## 🛠 Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Socket.IO Client
- CSS

### Backend
- Node.js
- Express.js
- Socket.IO
- Axios
- Mongoose

### Database
- MongoDB Atlas

### Deployment
- Vercel
- Render



## 📁 Project Structure

```text
arham-assignment
│
├── backend
│   ├── config
│   ├── controllers
│   ├── mock-bse
│   ├── models
│   ├── routes
│   ├── services
│   ├── sync
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── socket
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
└── README.md
```


## 🏗️ System Architecture

```text
                 Mock BSE API
                       │
          (Fetch every 60 seconds)
                       │
                       ▼
              Synchronization Service
                       │
                       ▼
                  MongoDB Atlas
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
   REST API                    Socket.IO Server
        │                             │
        └──────────────┬──────────────┘
                       ▼
                 React Frontend
```



## 🔄 Data Flow

```text
Mock BSE API
      │
      ▼
Backend Sync Service
      │
      ▼
MongoDB Atlas
      │
      ▼
Express REST API
      │
      ▼
React Dashboard
      │
      ▼
Live Updates via Socket.IO
```



## 🚀 API Endpoints

### Internal APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/internal/clients | Get all clients |
| GET | /api/internal/trades | Get all trades |
| GET | /api/internal/employees | Get all employees |
| GET | /api/internal/incentives | Get employee incentives |

### Mock BSE APIs

| Method | Endpoint |
|--------|----------|
| GET | /api/bse/clients |
| GET | /api/bse/trades |
| GET | /api/bse/employees |
| GET | /api/bse/mappings |



## ⚙️ Installation

### Clone Repository

```bash
git clone <https://github.com/Kartik-427/mock-bse-dashboard.git>
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```


## 🔑 Environment Variables

### Backend (.env)

```env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
BSE_DELAY=3000
BSE_API_URL=http://localhost:5000/api/bse
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```



## ☁️ Deployment

The application is deployed using modern cloud platforms.

| Service | Platform |
|---------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

### Live Demo

- **Frontend:** https://mock-bse-dashboard.vercel.app
- **Backend API:** https://mock-bse-dashboard.onrender.com




## 📸 Screenshots

### Dashboard

![alt text](/screenshots/image.png)

---

### Clients

![alt text](/screenshots/image-1.png)

---

### Trades

![alt text](/screenshots/image-2.png)

---

### Employees

![alt text](/screenshots/image-3.png)

---

### Incentives

![alt text](/screenshots/image-4.png)




## 🔄 Real-Time Synchronization

The backend periodically synchronizes data from the mock BSE API every 60 seconds.

Synchronization flow:

1. Fetch latest data from Mock BSE API
2. Store updated records in MongoDB
3. Recalculate employee incentives
4. Notify all connected clients using Socket.IO
5. React dashboard updates automatically without page refresh



## 🚀 Future Improvements

- JWT Authentication
- Role-based Access Control
- Search and Filtering
- Pagination
- Export Reports (CSV/PDF)
- Docker Support
- Unit & Integration Testing
- CI/CD Pipeline
- Redis Caching
- Background Job Queue




## 📈 Scaling Strategy (100x Users)

If the application needed to support 100x more users, the following improvements would be implemented:

- Horizontal scaling using multiple backend instances
- Load balancing with Nginx
- Redis caching for frequently accessed data
- Background jobs using BullMQ/RabbitMQ
- MongoDB indexing and read replicas
- CDN for static assets
- API rate limiting
- Monitoring using Prometheus and Grafana
- Centralized logging




## 👨‍💻 Author

**Kartik**

B.Sc. Information Technology

GitHub: https://github.com/Kartik-427

LinkedIn: https://www.linkedin.com/in/kartikyadav01/



## 📄 License

This project was developed as part of an internship assignment for educational and demonstration purposes.