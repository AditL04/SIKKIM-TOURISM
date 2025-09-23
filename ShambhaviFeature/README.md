<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Sikkim Tourism Group Project

An interactive web application showcasing the rich cultural heritage, monasteries, and events of Sikkim through maps, virtual tours, audio narration, and digital archives.

## About 

This is a group project built to showcase the rich culture and tourist experiences of Sikkim, India. The application features interactive maps, virtual monastery tours, a cultural events calendar, a booking system, and a digital archive of rare manuscripts and murals.  
The work has been divided among six members, each responsible for a specific module.

---

## Team & Roles

- **PRIYAMVADA KUMAR – Frontend (Map & Navigation)**
  - Implements interactive map (Leaflet.js)
  - Adds monastery markers, info popups, travel routes
  - Ensures responsive layout (desktop)

- **SHAMBHAVI GUPTA– Frontend (360° Virtual Tour)**
  - Integrates Panolens.js with React
  - Load sample 360° monastery images
  - Add pan, zoom, fullscreen controls
  - Links each monastery marker on map → opens its virtual tour

- **HARSHITA SINGH – Frontend (Audio & Narration)**
  - Adds audio narration player for tours
  - Build simple UI: buttons, navigation bar, language toggle
  - Ensures accessibility (captions/transcripts for audio)

- **RAJANYA GHOSH – Backend & Database**
  - Sets up Firebase Firestore DB
  - Create collections: monasteries, tours, events, bookings
  - Connects frontend to DB

- **ADITIYA LAHA – Cultural Calendar & Booking System**
  - Builds event calendar page (list + date filter)
  - Creates booking form (name, email, event)
  - Saves booking info to DB (Firebase)
  - Show confirmation popup

- **RISHIKA ANAND – Digital Archives & Documentation**
  - Collects sample scanned images
  - Created a gallery page with zoomable images
  - Writes project documentation (README)

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


>>>>>>> a8f97eba3ba21ed7d97335041b464f0fbb7ff117
