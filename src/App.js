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
        <NavBar />
        <Routes />
        <Footer />
    </Router>
  );
  };

export default App;