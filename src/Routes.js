import { React } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Candidature from './components/Candidature/Candidature';
import Login from './components/Login/Login';


const Routes = () => {
    return(

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/candidature" component={Candidature} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" /*component={Profile} *//>
            <Route path="/user" /*component={BoardUser}*/ />
            <Route path="/admin" /*component={}*/ />
        </Switch>

    );
};

export default Routes;
