import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import DrawerComponent from '../../components/drawer/drawer/drawer.component';
import TeamPage from '../team/team.page';

const Workspace = () => (
    <Fragment>
        <DrawerComponent />
        <Switch>
            <Route path="/workspace/team/:id"><TeamPage /></Route>
            <Route path="/workspace/company/:id"></Route>
        </Switch>
    </Fragment>
)

export default Workspace;