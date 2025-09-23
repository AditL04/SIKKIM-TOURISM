# Sikkim Tourism Project

An interactive web application showcasing the rich cultural heritage, monasteries, and events of Sikkim through maps, virtual tours, audio narration, and digital archives.

## About 

This is a group project built to showcase the rich culture and tourist experiences of Sikkim, India. The application features interactive maps, virtual monastery tours, a cultural events calendar, a booking system, and a digital archive of rare manuscripts and murals.  
The work has been divided among six members, each responsible for a specific module.

---

## Team & Roles

- **PRIYAMVADA KUMAR – Frontend (Map & Navigation)**
  - Implement interactive map (Leaflet.js or Google Maps API)
  - Add monastery markers, info popups, travel routes
  - Ensure responsive layout (desktop + mobile)

- **SHAMBHAVI GUPTA– Frontend (360° Virtual Tour)**
  - Integrate Panolens.js with React
  - Load sample 360° monastery images
  - Add pan, zoom, fullscreen controls
  - Link each monastery marker on map → opens its virtual tour

- **HARSHITA SINGH – Frontend (Audio & Narration + UI polish)**
  - Add audio narration player for tours
  - Build simple UI: buttons, navigation bar, language toggle
  - Ensure accessibility (captions/transcripts for audio)

- **RAJANYA GHOSH – Backend & Database**
  - Set up Firebase Firestore DB
  - Create collections: monasteries, tours, events, bookings
  - Connect frontend to DB
  - Backend with AI and an AI assistant adds smart, interactive, and personalized features.

- **ADITIYA LAHA – Cultural Calendar & Booking System**
  - Build event calendar page (list + date filter)
  - Create booking form (name, email, event)
  - Save booking info to DB (Firebase)
  - Show confirmation popup

- **RISHIKA ANAND – Digital Archives & Documentation**
  - Collect sample scanned manuscripts/murals (images)
  - Create gallery page with zoomable images
  - Add metadata (title, year, description)
  - Write project documentation (README, setup guide, demo script for judges)

---

## Features

- **Interactive Map:** Explore monasteries, travel routes, and points of interest.
- **360° Virtual Tours:** Panolens.js-powered immersive monastery views.
- **Audio Narration:** Tour guides with multi-language support and accessibility.
- **Event Calendar & Booking:** Browse cultural events; book your spot.
- **Digital Archives:** View rare manuscripts and murals with metadata.

---

## Technologies Used

### Frontend
- **HTML, CSS, JavaScript**
- **React.js**
- **Bootstrap**
- **Leaflet.js** (for interactive maps)
- **Panolens.js & Three.js** (for 360° content viewer)

### Backend
- **Node.js**
- **Express**
- **Render**

### Database & Hosting
- **Firebase**

### Data Format
- **JSON**

---

## Setup Guide

1. **Clone the Repository**
   ```sh
   git clone https://github.com/AditL04/SIKKIM-TOURISM.git
   cd SIKKIM-TOURISM
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Setup Firebase**
   - Create a Firebase project.
   - Add Firebase config to `/src/firebase.js`.

4. **Start Development Server**
   ```sh
   npm start
   ```

---

## Contribution 
 
To contribute:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---

## License

This project is for educational purposes only.

---

## Credits

This project is made possible by the collaborative efforts of the entire team.  

