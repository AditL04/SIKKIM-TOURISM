import axios from "axios";

// ✅ Use proxy (in package.json) during development, or env variable in production
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "/",
});

export const fetchMonasteries = () => API.get("/monasteries");
export const fetchTours = () => API.get("/tours");
export const fetchEvents = () => API.get("/events");
export const fetchBookings = (email) =>
  API.get("/bookings", { params: { email } });
export const createBooking = (data) => API.post("/bookings", data);

export default API;
