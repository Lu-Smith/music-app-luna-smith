import "./App.css";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <header className="App">Music App</header>
      <Main />
      <footer>
        <div className="created-by">
          The project was coded by
          <a
            href="https://www.lunasmithart.com/"
            target="_blank"
            alt="Luna Smith art"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            {" "}
            Luna Smith{" "}
          </a>
          and is
          <a
            href="https://github.com/Lu-Smith/weather-app-by-luna-smith-react"
            target="_blank"
            alt="my GitHub"
            rel="noopener noreferrer"
            className="GitHub"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
