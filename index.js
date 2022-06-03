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
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope: scope,
    state: state,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get("/callback", (req, res) => {
  const code = req.query.code || null;

  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: querystring.stringify({
      code: code,
      redirect_uri: REDIRECT_URI,
      grant_type: "authorization_code",
    }),
    headers: {
      "contet-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
    },
    json: true,
  })
    .then((response) => {
      if (response.status === 200) {
        const { access_token, token_type } = response.data;

        axios
          .get("https://api.spotify.com/v1/me", {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          })
          .then((response) => {
            res.send(response.data);
          })
          .catch((err) => res.send(err));
      } else {
        res.send(response);
      }
    })
    .catch((err) => res.send(err));
});

const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Express app is listening at http://localhost:${PORT}`);
});

app.get;
