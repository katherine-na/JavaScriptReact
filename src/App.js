import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CatItem from "./components/CatItem";
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import MoviesList from "./components/MoviesList";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Navbar />
      <CatItem name="Kevin Stiven" age="5" race="Orange Taby" />
      <CatItem name="Timon" age="3" race="Taby"/>
      <CatItem name="Mishuga" age="2" race="Taby Gray"/>
      <CatItem name="Brandy" age="1" race="Siames"/>
      <Form/>
      <UsersList/>
      <MoviesList/>
      <Button/>
      <Footer />

    </>
  );
}

export default App;
