# 🧙‍♂️ HNG 12 Backend Wizards — Stage 0 Task

## 📌 Project Overview
This project is my submission for **Stage 0 of the HNG 12 Backend Wizards Internship**.  
The goal was to build a simple RESTful API endpoint that returns my profile information  
alongside a **dynamic cat fact** fetched from the [Cat Facts API](https://catfact.ninja/fact).

---

## 🚀 Endpoint Specification

### **GET** `/me`

#### ✅ Example Response
```json
{
  "status": "success",
  "user": {
    "email": "paulabodunde@example.com",
    "name": "Paul Abodunde",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T12:00:00.000Z",

⚙️ Tech Stack

. Node.js

. Express.js

. Axios

. CORS

. Dotenv


🧩 Features

Returns user info (email, name, backend stack)

Fetches a random cat fact dynamically from an external API

Handles API timeouts and errors gracefully

Returns a fresh timestamp (UTC, ISO 8601) on each request

Proper JSON formatting and HTTP headers
  "fact": "Cats can rotate their ears 180 degrees."
}
