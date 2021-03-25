import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from "./components/Navbar-Footer/NavBar.jsx";
import Routes from './Routes';
import { history } from './helpers/history';
import { Router } from 'react-router-dom';
import Footer from "./components/Navbar-Footer/Footer";



function App() {
  return (
    <Router history={history}>
      <div className="container">
        <NavBar />
      </div>
      <div className= "container-fluid">
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
