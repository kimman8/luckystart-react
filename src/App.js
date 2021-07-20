import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { mainsData, entreesData } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Mains" data={mainsData} />
      <Feature />
      <Products heading="Entrees" data={entreesData} />
      <Footer />
    </Router>
  );
}

export default App;
