import React, {Fragment} from 'react';
import Registration from './pages/registration/registration.component';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

const App = () => (
    <Fragment>
        <Header />
        <Switch>
            <Route exact path="/r" component={MainPage} />
            <Route path='/' component={Registration} />
        </Switch>
    </Fragment>
)

export default App;
