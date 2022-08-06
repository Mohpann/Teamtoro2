import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Fighters } from "./components/Fighters.js";
import { Contact} from "./components/Contact"
//const API_URL = 'http://www.omdbapi.com?apikey=101c6e93';

function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/Fighters":
      component = <Fighters />
      break
    case "/Contact":
      component = <Contact />
      break
  }
  return (
    <div>
      <NavBar/>
      {component}
      <Footer />
    </div>
  );
}

export default App;