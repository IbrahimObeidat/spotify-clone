import { useEffect, useState } from "react";
import { accessToken, logout } from "./api";
import "./App.css";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a href="http://localhost:8888/login">Login to Spotify</a>
        ) : (
          <>
            <h1>Logged in!</h1>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
