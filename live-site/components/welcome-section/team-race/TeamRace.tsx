import React from 'react';
import { P } from '../../../../shared-ui/style/typography';
import { TeamProps, TeamRaceProps } from '../../../lib/types';
import {
  StyledRaceContainer,
  StyledRaceContent
} from '../WelcomeSection.styles';
import Team from './Team';
import { StyledTeamHeader } from './Team.styles';

const TeamRace: React.FC<TeamRaceProps> = ({ teams }) => {
  const orderTeams = (teams: TeamProps[]): TeamProps[] => {
    return teams.sort(
      (team1: TeamProps, team2: TeamProps) => team2.points - team1.points
    );
  };

  return (
    <>
      <StyledRaceContainer>
        <StyledRaceContent>
          <StyledTeamHeader>Desert Race</StyledTeamHeader>
          <P>{`Earn points for yourself and your cabin by participating in events! Let’s see which cabin wins the 2023 Desert Race!`}</P>
        </StyledRaceContent>
        {orderTeams(teams).map((team: TeamProps, position: number) => (
          <Team
            key={team.index}
            name={team.name}
            points={team.points}
            position={position + 1}
            index={team.index}
          />
        ))}
      </StyledRaceContainer>
    </>
  );
};

export default TeamRace;
