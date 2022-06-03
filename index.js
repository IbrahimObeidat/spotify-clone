require("dotenv").config();
const querystring = require("querystring");
const axios = require("axios");
const express = require("express");
const app = express();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = (length) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.get("/login", (req, res) => {
  const scope = "user-read-private user-read-email";
  const state = generateRandomString(16);
  res.cookie("spotify-auth-state", state);

  const queryParams = querystring.stringify({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: scope,
    state: satate,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Express app is listening at http://localhost:${PORT}`);
});

app.get;
