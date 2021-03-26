import { React } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () =>{

    return(
        <div className = "container home">
            <div className ="page-header d-flex flex-column align-items-center text-center pt-5">
                <h1 className="pt-5">Cvtech Bienvenue</h1>
                <Link to={"/candidature"} className="btn btn-sm btn-candidature">
                Deposer votre candidature
                </Link>      
            </div>
                
        </div>
    );
};

export default Home;
