import React, {Fragment, useEffect} from 'react';
import Registration from './pages/registration/registration.component';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import { autoLogin } from './redux/auth/auth.actions';
import { useDispatch } from 'react-redux';
import Verification from './pages/verification/verification.component';
import TeamPage from './pages/team/team.page';

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(autoLogin());
    }, []);

    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path='/registration' component={Registration} />
                <Route path='/verification' component={Verification} />
                <Route path='/team' component = {TeamPage} />
            </Switch>
        </Fragment>
    )
}

export default App;
