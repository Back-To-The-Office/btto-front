import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import DrawerComponent from '../../components/drawer/drawer/drawer.component';
import TeamPage from '../team/TeamPage';

const Workspace = () => (
    <Fragment>
        <DrawerComponent />
        <Switch>
            <Route path="/workspace/team/:id" component={TeamPage} />
            <Route path="/workspace/company/:id"></Route>
        </Switch>
    </Fragment>
);

export default Workspace;
