import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Team from './sections/team/team.section';
import { TeamPageContent } from './team.styles';
import TimezoneSection from './sections/timezones/timezones.section';
import { marvel } from '../../placeholder';
import LoadingSpinner from '../../assets/loading-spinner/spinner.component';

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
                        <TimezoneSection members={members} />
                    </Fragment>
                }
            </TeamPageContent>
        )
    }
}

export default withRouter(TeamPage);