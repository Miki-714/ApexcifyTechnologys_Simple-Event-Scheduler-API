const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data store
let events = [
  {
    id: 1,
    title: "Launch Party",
    date: "2026-12-01",
    description: "Celebrating the new API!",
  },
];

/**
 * GET /events
 * Returns all events sorted by date (ascending)
 */
app.get("/events", (req, res) => {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );
  res.json(sortedEvents);
});

/**
 * POST /events
 * Adds a new event with validation
 */
app.post("/events", (req, res) => {
  const { title, date, description } = req.body;

  // 1. Basic field validation
  if (!title || !date || !description) {
    return res
      .status(400)
      .json({ error: "Missing required fields: title, date, description" });
  }

  // 2. Date validation (Check if date is in the past)
  const eventDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize time to compare dates only

  if (isNaN(eventDate.getTime())) {
    return res
      .status(400)
      .json({ error: "Invalid date format. Use YYYY-MM-DD." });
  }

  if (eventDate < today) {
    return res
      .status(400)
      .json({ error: "Cannot schedule events in the past." });
  }

  // 3. Create and store event
  const newEvent = {
    id: events.length + 1,
    title,
    date,
    description,
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
});

app.listen(PORT, () => {
  console.log(`Event Scheduler API running on http://localhost:${PORT}`);
});
