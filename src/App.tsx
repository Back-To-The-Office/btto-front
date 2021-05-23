import React from 'react';
import Registration from './pages/auth/Registration';
import Login from './pages/auth/Login';
// import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
// import MainPage from './pages/MainPage/MainPage';
import { autoLogin } from './redux/auth/auth.actions';
import { useDispatch } from 'react-redux';
import Verification from './pages/verification/verification.component';
import Workspace from './pages/workspace/Workspace';
import Departments from './pages/Departments';

const App: React.FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => dispatch(autoLogin()), []);

    return (
        <React.Fragment>
            <Switch>
                <Route path='/workspace' component={Workspace} />
                <Route path='/login' component={Login} />
                <Route path='/registration' component={Registration} />
                <Route path='/verification' component={Verification} />
                <Route path='/departments' component={Departments} />
            </Switch>
        </React.Fragment>
    )
}

export default App;
