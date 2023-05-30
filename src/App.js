import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Fighters } from "./components/Fighters";
import { Contact } from "./components/Contact"
import { Schedule } from "./components/Schedule"

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
    case "/Schedule":
      component = <Schedule />
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