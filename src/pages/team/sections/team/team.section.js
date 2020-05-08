import React from 'react';
import TeamCircle from '../../../../components/team-circle/team-circle.component';
import { TeamContent } from './team.styles';
import { SectionHeader, SectionSubHeader } from '../../../../common-styles/headers/headers.styles';

const Team = ( { teamName, users } ) => (
    <TeamContent>
        <SectionSubHeader>The Team</SectionSubHeader>
        <SectionHeader>{teamName}</SectionHeader>
        <TeamCircle users={users} />
    </TeamContent>
)

export default Team