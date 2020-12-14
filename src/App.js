import React, {Fragment, useEffect} from 'react';
import Registration from './pages/auth/registration/registration.component';
import Login from './pages/auth/login/login.component';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import { autoLogin } from './redux/auth/auth.actions';
import { useDispatch } from 'react-redux';
import Verification from './pages/verification/verification.component';
import Workspace from './pages/workspace/workspace.component';

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(autoLogin());
    }, []);

    return (
        <Fragment>
            <Switch>
                <Route path='/workspace' component={Workspace} />
                <Route path='/login' component={Login} />
                <Route path='/registration' component={Registration} />
                <Route path='/verification' component={Verification} />
            </Switch>
        </Fragment>
    )
}

export default App;
