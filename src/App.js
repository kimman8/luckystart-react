import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
