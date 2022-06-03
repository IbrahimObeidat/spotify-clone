import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  // to get the access and refresh tokens from url queries
  useEffect(() => {
    const queryString = window.location.search;
    const urlPrams = new URLSearchParams(queryString);
    const access_token = urlPrams.get("access_token");
    const refresh_token = urlPrams.get("refresh_token");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="http://localhost:8888/login">Login to Spotify</a>
      </header>
    </div>
  );
};

export default App;
