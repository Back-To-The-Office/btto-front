import React, { Component, Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Team from './sections/team/TeamSection';
import { TeamPageContent } from './team.styles';
import TimezoneSection from './sections/timezones/timezones.section';
import { marvel } from '../../placeholder';
import LoadingSpinner from '../../assets/loading-spinner/spinner.component';
import UserCard from '../../components/user-card/user-card.component';
// import User from '../../types/user';

// interface TeamPageState {
//     companyId: number,
//     id: number,
//     ownerId: number,
//     participantsIds: Array<number>,
//     isLoading: boolean;
// }

class TeamPage extends Component {
    state = {
        name: '',
        members: {},
        isLoading: true
    }

    fetchNewData = match => {
        const teamId = match.params.id;
        const team = marvel.teams[teamId];
        const { name, members } = team;
        this.setState({
            name, members, isLoading: false
        });
    }

    componentDidMount() {
        this.fetchNewData(this.props.match);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchNewData(nextProps.match);
    }
    render () {
        const { isLoading, name, members } = this.state;
        return (
            <TeamPageContent>
                {isLoading ? 
                    <LoadingSpinner /> : 
                    <Fragment>
                        <Team teamName={name} members={members} />
                        <TimezoneSection usersObject={members} />
                        <UserCard />
                    </Fragment>
                }
            </TeamPageContent>
        )
    }
}

export default withRouter(TeamPage);