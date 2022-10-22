import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CatItem from "./components/CatItem";

function App() {
  return (
    <>
      <Navbar />
      <CatItem name="Kevin Stiven" age="5" race="Orange Taby" />
      <CatItem name="Timon" age="3" race="Taby"/>
      <CatItem name="Mishuga" age="2" race="Taby Gray"/>
      <CatItem name="Brandy" age="1" race="Siames"/>
      <Footer />

    </>
  );
}

export default App;
