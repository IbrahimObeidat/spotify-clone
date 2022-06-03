import logo from "./logo.svg";
import "./App.css";

const App = () => {
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
