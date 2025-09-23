// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import { db, admin } from "./firebase.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow all origins (dev). Restrict in prod
app.use(express.json()); // Parse JSON bodies

// OpenAI client
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Logger middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

/**
 * Helper: collection route generator
 */
function createCollectionRoutes(collectionName) {
  // List all
  app.get(`/${collectionName}`, async (req, res) => {
    try {
      const snapshot = await db.collection(collectionName).get();
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.json(items);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: `Error fetching ${collectionName}` });
    }
  });

  // Get single
  app.get(`/${collectionName}/:id`, async (req, res) => {
    try {
      const doc = await db.collection(collectionName).doc(req.params.id).get();
      if (!doc.exists) {
        return res.status(404).json({ error: `${collectionName} not found` });
      }
      res.json({ id: doc.id, ...doc.data() });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: `Error fetching ${collectionName}` });
    }
  });

  // Create
  app.post(`/${collectionName}`, async (req, res) => {
    try {
      const data = req.body || {};
      data.createdAt = admin.firestore.FieldValue.serverTimestamp();
      const docRef = await db.collection(collectionName).add(data);
      console.log(`${collectionName} written with ID: ${docRef.id}`);
      res.status(201).json({ id: docRef.id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: `Error creating ${collectionName}` });
    }
  });

  // Update
  app.put(`/${collectionName}/:id`, async (req, res) => {
    try {
      await db
        .collection(collectionName)
        .doc(req.params.id)
        .set(req.body, { merge: true });
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: `Error updating ${collectionName}` });
    }
  });

  // Delete
  app.delete(`/${collectionName}/:id`, async (req, res) => {
    try {
      await db.collection(collectionName).doc(req.params.id).delete();
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: `Error deleting ${collectionName}` });
    }
  });
}

// Collections
["monasteries", "tours", "events"].forEach(name =>
  createCollectionRoutes(name)
);

// Bookings
app.post("/bookings", async (req, res) => {
  try {
    const booking = req.body || {};
    booking.createdAt = admin.firestore.FieldValue.serverTimestamp();
    const docRef = await db.collection("bookings").add(booking);
    console.log("Booking written with ID:", docRef.id);
    res.status(201).json({ id: docRef.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating booking" });
  }
});

app.get("/bookings", async (req, res) => {
  try {
    let q = db.collection("bookings");
    if (req.query.email) {
      q = q.where("email", "==", req.query.email);
    }
    const snap = await q.get();
    const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

// Root
app.get("/", (req, res) => {
  res.send("Server is working! Use /monasteries /tours /events /bookings");
});

// Chat route
app.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });
    res.json({ reply: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
