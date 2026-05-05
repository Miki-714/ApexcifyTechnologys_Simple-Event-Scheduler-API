# Simple Event Scheduler API 📅

A lightweight, robust RESTful API built with **Express.js** to manage and schedule upcoming events. This project demonstrates backend fundamentals including data validation, chronological sorting, and RESTful routing.

## 🚀 Features

- **Create Events:** Add new events with a title, date, and description.
- **Date Validation:** Built-in logic to prevent scheduling events in the past.
- **Chronological Sorting:** The list of events is automatically sorted by date (ascending) to provide a clear timeline.
- **In-Memory Storage:** Fast and lightweight data handling for quick prototyping.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Environment:** Development server on Port 3000

## 📋 API Endpoints

### 1. Get All Events

**URL:** `/events`  
**Method:** `GET`  
**Description:** Returns a list of all scheduled events, sorted from the soonest to the furthest date.

### 2. Create New Event

**URL:** `/events`  
**Method:** `POST`  
**Payload Example:**

```json
{
  "title": "Project Demo",
  "date": "2026-12-15",
  "description": "Demonstrating the API features to the team."
}
```

````

**Validation:** Returns a `400 Bad Request` if the date is in the past or fields are missing.

## 🚦 Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/Miki-714/ApexcifyTechnologys_Simple-Event-Scheduler-API](https://github.com/Miki-714/ApexcifyTechnologys_Simple-Event-Scheduler-API.git)
   ```
2. Navigate to the project folder:
   ```bash
   cd ApexcifyTechnologys_Simple-Event-Scheduler-API

   ```

````

3. Install dependencies:
   ```bash
   npm install
   ```

````

### Running the App

Start the server with:

```bash
node server.js
```

The API will be running at `http://localhost:3000`.

## 🧪 Testing with cURL

You can test the POST endpoint directly from your terminal:

```bash
curl -X POST http://localhost:3000/events \
-H "Content-Type: application/json" \
-d '{"title": "Tech Talk", "date": "2026-06-10", "description": "Discussing Express middleware"}'
```
````
=======
Simple Event Scheduler API
>>>>>>> 714bcb27a8b004d7d827cbcae1187163fe79918f
