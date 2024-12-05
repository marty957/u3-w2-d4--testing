import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import Welcome from "../src/components/Welcome";
//import AllTheBooks from "../src/components/AllTheBooks";
//import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <NavBar />
      <Welcome />

      <BookList books={fantasy} />
      <Footer />
    </>
  );
}

export default App;
