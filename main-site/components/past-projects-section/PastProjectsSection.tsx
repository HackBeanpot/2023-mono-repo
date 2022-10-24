import React, { useState } from 'react';
import FennecFox from '../../../shared-ui/images/fennec-fox.svg';
import Inky from '../../../shared-ui/images/inky.jpg';
import Swaple from '../../../shared-ui/images/swaple.png';
import Camel from '../../../shared-ui/images/camel.svg';
import Duck from '../../../shared-ui/images/duck.png';
import useMatchMedia from 'react-use-match-media';

import {
  StyledPastProjectsSection,
  StyledPastProjectsHeader,
  StyledFennecFox,
  StyledPastProjectsContainer,
  StyledPastProjectsTitle,
  StyledPastProjectsMembers,
  StyledPastProjectsDescription,
  StyledPastProjectsPhotos,
  StyledPastProjectsInfo,
  StyledPastProjectsViewText,
  StyledPastProjectsInfoContainer,
  StyledCamel,
  StyledPastProjects,
  StyledPastProjectsContainerBottom
} from './PastProjectsSection.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { min } from '../../../shared-ui/lib/responsive';
import { pastProjectsData } from '../../lib/data';
const PastProjectsSection: React.FC = () => {
  function getImage(title: string): string {
    if (title === 'Inky the Black Hole Pet, 2022') {
      return Inky;
    }
    if (title === 'Swaple, 2022') {
      return Swaple;
    }
    return Duck;
  }

  return (
    <StyledPastProjects>
      <StyledCamel src={Camel} />
      <StyledFennecFox src={FennecFox} />
      <StyledPastProjectsHeader>Past Projects</StyledPastProjectsHeader>
      <StyledPastProjectsSection>
        {pastProjectsData.map((project) => (
          <StyledPastProjectsContainer>
            <StyledPastProjectsPhotos src={getImage(project.title)} />
            <StyledPastProjectsInfo>
              <StyledPastProjectsTitle>{project.title}</StyledPastProjectsTitle>
              <StyledPastProjectsMembers>
                {project.members}
              </StyledPastProjectsMembers>
              <StyledPastProjectsDescription>
                {project.description}
              </StyledPastProjectsDescription>
              <PrimaryButton
                btnText="View Project"
                btnLink={project.btnLink}
                newTab
              />
            </StyledPastProjectsInfo>
          </StyledPastProjectsContainer>
        ))}
      </StyledPastProjectsSection>

      <StyledPastProjectsInfoContainer>
        <StyledPastProjectsViewText>
          Interested in seeing more about our past events and past hacker
          projects?
          <br />
          Check out the HackBeanpot Archive!
        </StyledPastProjectsViewText>
        <PrimaryButton
          btnText="View Archive"
          btnLink="https://projects.hackbeanpot.com/"
          newTab
        />
      </StyledPastProjectsInfoContainer>
    </StyledPastProjects>
  );
};

export default PastProjectsSection;
