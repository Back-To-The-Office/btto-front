import React, { Fragment, useState } from 'react';
import DrawerComponent from '../../components/drawer/drawer/drawer.component';
import TeamTable from '../../components/team-table/table/table.component';
import TeamCircle from '../../components/team-circle/team-circle.component';
import { TeamPageContent } from './team.styles';

const users = [
    {
        id: 1,
        timezone: -120,
        name: 'Andrey Nagoev',
        geo: 'Moscow, Russian Federation',
        role: 'Frontend',
        img: 'https://img1.looper.com/img/gallery/audi-may-have-spoiled-who-saves-tony-stark-in-avengers-4/intro-1547480934.jpg',
        isOnline: true,
        workTime: [[8, 12], [14, 17]]
    },
    {
        id: 2,
        timezone: -180,
        name: 'Andrey Nagoev',
        geo: 'Moscow, Russian Federation',
        role: 'Frontend',
        img: 'https://img1.looper.com/img/gallery/audi-may-have-spoiled-who-saves-tony-stark-in-avengers-4/intro-1547480934.jpg',
        isOnline: true,
        workTime: [[8, 12], [14, 17]]
    },
    {
        id: 3,
        timezone: 0,
        name: 'Andrey Nagoev',
        geo: 'Moscow, Russian Federation',
        role: 'Frontend',
        img: 'https://img1.looper.com/img/gallery/audi-may-have-spoiled-who-saves-tony-stark-in-avengers-4/intro-1547480934.jpg',
        isOnline: true,
        workTime: [[8, 12], [14, 17]]
    },
    {
        id: 4,
        timezone: 0,
        name: 'Andrey Nagoev',
        geo: 'Moscow, Russian Federation',
        role: 'Frontend',
        img: 'https://img1.looper.com/img/gallery/audi-may-have-spoiled-who-saves-tony-stark-in-avengers-4/intro-1547480934.jpg',
        isOnline: true,
        workTime: [[8, 12], [14, 17]]
    },
    {
        id: 5,
        timezone: 0,
        name: 'Andrey Nagoev',
        geo: 'Moscow, Russian Federation',
        role: 'Frontend',
        img: 'https://img1.looper.com/img/gallery/audi-may-have-spoiled-who-saves-tony-stark-in-avengers-4/intro-1547480934.jpg',
        isOnline: true,
        workTime: [[8, 12], [14, 17]]
    }
]

const TeamPage = () => {
    const [ isOpen, setOpen ] = useState(true);
    const otherUsers = [...users];
    const mainUser = otherUsers.splice(otherUsers.findIndex(user => user.id === 1), 1)[0];


    const toggleDrawer = () => {
        setOpen(!isOpen)
    }

    return (
        <Fragment>
            <DrawerComponent isOpen={isOpen} user={mainUser} toggleDrawer={toggleDrawer} />
            <TeamPageContent>
                <TeamCircle users={users} />
                <TeamTable mainUser={mainUser} otherUsers={otherUsers} />
            </TeamPageContent>
        </Fragment>
    )
}

export default TeamPage