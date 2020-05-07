import React, { Fragment, useState } from 'react';
import DrawerComponent from '../../components/drawer/drawer/drawer.component';
import Team from './sections/team/team.section';
import { TeamPageContent } from './team.styles';
import TimezoneSection from './sections/timezones/timezones.section';

const team = {
    teamName: 'Project Managment Development',
    users : [
        {
            id: 1,
            timezone: 0,
            name: 'Ester Jones',
            geo: 'London, United Kingdom',
            role: 'Manager',
            img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg',
            isOnline: true,
            workTime: [[9, 16]]
        },
        {
            id: 2,
            timezone: -120,
            name: 'Randall Robertson',
            geo: 'Munich, German',
            role: 'Project Manager',
            img: 'https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg',
            isOnline: true,
            workTime: [[9, 16]]
        },
        {
            id: 3,
            timezone: -120,
            name: 'Darlene Mckinney',
            geo: 'Lyon, France',
            role: 'Project Manager',
            img: 'https://us.123rf.com/450wm/dolgachov/dolgachov1707/dolgachov170703100/82863658-happy-smiling-middle-aged-woman-at-home.jpg?ver=6',
            isOnline: false,
            workTime: [[9, 16]]
        },
        {
            id: 4,
            timezone: -180,
            name: 'Savannah Bell',
            geo: 'Moscow, Russian Federation',
            role: 'Project Manager',
            img: 'https://madonnaobgyn.azureedge.net/wp-content/uploads/2015/03/middle-aged-woman.jpg',
            isOnline: true,
            workTime: [[9, 16]]
        },
        {
            id: 5,
            timezone: -360,
            name: 'Juanita Mccoy',
            geo: 'New Delhi, India',
            role: 'Project Manager',
            img: 'https://www.kochiesbusinessbuilders.com.au/wp-content/uploads/2018/09/middle-aged-woman.jpg',
            isOnline: true,
            workTime: [[9, 16]]
        },
        {
            id: 6,
            timezone: -180,
            name: 'Andrey Nagoev',
            geo: 'Penza, Russian Federation',
            role: 'Project Manager',
            img: 'https://steezo.com/wp-content/uploads/2012/12/man-in-suit2.jpg',
            isOnline: false,
            workTime: [[9, 16]]
        },
        {
            id: 7,
            timezone: 240,
            name: 'Fill Mask',
            geo: 'Miami, USA',
            role: 'Project Manager',
            img: 'https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=',
            isOnline: true,
            workTime: [[9, 16]]
        },
        {
            id: 8,
            timezone: 240,
            name: 'Piter Jackson',
            geo: 'Miami, USA',
            role: 'Project Manager',
            img: 'https://shelterhousemidland.org/wp-content/uploads/2019/07/Don-Sheets-2019.jpg',
            isOnline: false,
            workTime: [[9, 16]]
        }
    ]
} 


const TeamPage = () => {
    const [ isOpen, setOpen ] = useState(true);
    const { teamName, users } = team;

    const toggleDrawer = () => {
        setOpen(!isOpen)
    }

    return (
        <Fragment>
            <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
            <TeamPageContent>
                <Team teamName={teamName} users={users} />
                <TimezoneSection users={users} />
            </TeamPageContent>
        </Fragment>
    )
}

export default TeamPage