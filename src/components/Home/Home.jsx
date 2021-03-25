import { React } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () =>{

    return(
        <div className = "row home">

                <Link to={"/candidature"} className="btn btn-candidature">
                Deposer votre candidature
                </Link>
        </div>
    );
};

export default Home;
