import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Nav from "./Components/Nav";
import Sec1 from "./Components/Sec1";
import Roadmap from "./Components/Roadmap";
import Accordion from "./Components/Accordion";
import Ourteam from "./Components/Ourteam";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Sec1 />
      <Roadmap />
      <Accordion />
      <Ourteam />
      <Footer />
    </div>
  );
}

export default App;
