import React, { Component } from 'react';
import { Table, TableHead, TableBody, withStyles } from '@material-ui/core';
import TeamTableRow from '../row/row.component';

const StyledTable = withStyles({
    root: {
        paddingRight: 'auto',
    }
})(Table)

class TeamTable extends Component {
    state = {
        currentTimeInPercent: 0
    }

    getCurrentPercentTime = () => {
        const date = new Date();
        const currentTime = date.getHours() * 60 + date.getMinutes();
        return Math.round(currentTime * 100 / 1440);
    }
    updateTime = () => {
        this.setState({
            currentTimeInPercent: this.getCurrentPercentTime()
        })
        setTimeout(this.updateTime, 60000);
    }

    componentDidMount() {
        this.updateTime();
    }

    render() {
        const { user, members } = this.props;
        const { currentTimeInPercent } = this.state;
        return (
            <StyledTable size="small" stickyHeader={true}>
                <TableHead>
                    <TeamTableRow user={user} mainUserTimezone={user.timezone} currentTimeInPercent={currentTimeInPercent} />
                </TableHead>
                <TableBody>
                    {Object.keys(members).map(member => <TeamTableRow key={member} currentTimeInPercent={currentTimeInPercent} user={members[member]} mainUserTimezone={user.timezone} />)}
                </TableBody>
            </StyledTable>
        )
    }
}

export default TeamTable