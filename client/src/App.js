import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { accessToken, logout } from "./api";
import {
  Login,
  Profile,
  TopArtists,
  TopTracks,
  Playlists,
  Playlist,
} from "./pages";
import { GlobalStyles } from "./styles";
import styled from "styled-components";
import { Player } from "./components";

const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

const App = () => {
  const [token, setToken] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        {!token ? (
          <Login />
        ) : (
          <>
            <StyledLogoutButton onClick={logout}>Logout</StyledLogoutButton>
            <ScrollToTop>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Profile
                      playingTrack={playingTrack}
                      setPlayingTrack={setPlayingTrack}
                      isPlaying={isPlaying}
                    />
                  }
                ></Route>
                <Route path="/top-artists" element={<TopArtists />}></Route>
                <Route
                  path="/top-tracks"
                  element={
                    <TopTracks
                      playingTrack={playingTrack}
                      setPlayingTrack={setPlayingTrack}
                      isPlaying={isPlaying}
                    />
                  }
                ></Route>
                <Route path="/playlists" element={<Playlists />}></Route>
                <Route
                  path="/playlists/:id"
                  element={
                    <Playlist
                      playingTrack={playingTrack}
                      setPlayingTrack={setPlayingTrack}
                      isPlaying={isPlaying}
                    />
                  }
                ></Route>
              </Routes>
            </ScrollToTop>
            {token && playingTrack && (
              <Player
                token={token}
                playingTrack={playingTrack}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
            )}
          </>
        )}
      </header>
    </div>
  );
};

export default App;
