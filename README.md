# Spotify Clone App

This is a simple Spotify clone app built with React. It visualizes some personalized data retrieved from the Spotify API and provides track-playing functionality.

Try this [Live Demo](https://spotify-clone-app-v1.herokuapp.com/) 👈

## Technologies used
**Backend**
- Node
- Express
- Axios

**Frontend**
- HTML
- CSS
- Javascript (ES6)
- React
- React Router
- Styled Components

## Installation & Set Up
1.  Create a Spotify App in your  [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)  and add  `http://localhost:8888/callback`  as a Redirect URI in the app settings

2. Create a  `.env`  file at the root of the project and add your unique  `CLIENT_ID`  and  `CLIENT_SECRET`  from the Spotify dashboard
   
3. Ensure  [nvm](https://github.com/nvm-sh/nvm)  and  [npm](https://www.npmjs.com/)  are installed globally
   
4. Run `npm install` at the root of the project to install the necessary dependencies (it will automatically install the dependencies for both the server & the client side)

5. Run the React app on [http://localhost:3000](http://localhost:3000/) and the Node server on [http://localhost:8888](http://localhost:8888/)
   ```
   npm start
   ```