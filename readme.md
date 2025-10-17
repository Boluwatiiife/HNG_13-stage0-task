# Cat Fact Profile API 🐱

A simple Express.js API that returns your personal profile information, the current UTC timestamp, and a random cat fact fetched from an external API.

---

## 🚀 Features

- Built with **Node.js** and **Express.js**
- Fetches a random cat fact from [catfact.ninja](https://catfact.ninja)
- Uses environment variables for easy configuration
- Returns data in JSON format

---

## 🧩 API Endpoint

### **GET** `/me`

#### Example Response

```json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T09:33:45.512Z",
  "fact": "Cats sleep for 70% of their lives."
}
```

---

## 🧑‍💻 Installation & Setup

### Clone the repository

- git clone https://github.com/yourusername/cat-fact-profile-api.git
- cd cat-fact-profile-api

### Install dependencies

- npm install

#### Create .env file

- PORT=3000
- EMAIL=youremail@example.com
- NAME=Your Full Name
- STACK=Node.js/Express

---

#### Start the server

- node app.js

- Visit the endpoint

http://localhost:3000/me
