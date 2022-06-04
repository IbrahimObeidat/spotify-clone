import { useEffect, useState } from "react";
import { accessToken, logout, getCurrentUserProfile } from "./api";
import { catchErrors } from "./utils";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const App = () => {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a href="http://localhost:8888/login">Login to Spotify</a>
        ) : (
          <Routes>
            <ScrollToTop />
            <Route
              path="/"
              element={
                <>
                  <button onClick={logout}>Logout</button>
                  {profile && (
                    <div>
                      <h1>{profile.display_name}</h1>
                      <p>{profile.followers.total}</p>
                      {profile.images.length && profile.images[0].url && (
                        <img src={profile.images[0].url} alt="Profile avatar" />
                      )}
                    </div>
                  )}
                </>
              }
            ></Route>
            <Route path="/top-artists" element={<h1>Top Artists</h1>}></Route>
            <Route path="/top-tracks" element={<h1>Top Tracks</h1>}></Route>
            <Route path="/playlists" element={<h1>Playlists</h1>}></Route>
            <Route path="/playlist/:id" element={<h1>Playlist</h1>}></Route>
          </Routes>
        )}
      </header>
    </div>
  );
};

export default App;
