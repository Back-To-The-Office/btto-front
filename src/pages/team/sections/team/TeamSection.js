import React from 'react';
import TeamCircle from '../../../../components/team-circle/team-circle.component';
import { TeamContent } from './team.styles';
import { SectionHeader, SectionSubHeader } from '../../../../common-styles/headers/headers.styles';
// import { User } from '../../../../types/user';

// interface TeamSectionProps = {
//     teamName: string,
//     members: Array<User>
// }

const Team = ( { teamName, members } ) => (
    <TeamContent>
        <SectionSubHeader>The Team</SectionSubHeader>
        <SectionHeader>{teamName}</SectionHeader>
        <TeamCircle members={members} />
    </TeamContent>
)

export default Team