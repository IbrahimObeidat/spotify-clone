import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { accessToken, logout } from "./api";
import { Login, Profile } from "./pages";
import { GlobalStyles } from "./styles";
import styled from "styled-components";

const StyledLoginButton = styled.button`
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
            <StyledLoginButton onClick={logout}>Logout</StyledLoginButton>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Profile />}></Route>
                <Route
                  path="/top-artists"
                  element={<h1>Top Artists</h1>}
                ></Route>
                <Route path="/top-tracks" element={<h1>Top Tracks</h1>}></Route>
                <Route path="/playlists" element={<h1>Playlists</h1>}></Route>
                <Route path="/playlist/:id" element={<h1>Playlist</h1>}></Route>
              </Routes>
            </ScrollToTop>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
