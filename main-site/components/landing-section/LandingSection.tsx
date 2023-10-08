import React from 'react';
import {
  StyledHackathonText,
  StyledThemeText,
  StyledLandingButtonContainer,
  StyledLandingSectionContainer,
  StyledLandingTextContainer,
  StyledStar,
  StyledThemeTextSmall,
  StyledThemeTextParagraph
} from './LandingSection.styles';
import ToggleMode from '../../../shared-ui/components/toggle-mode/ToggleMode';
import Sun from '../../../shared-ui/images/sun.svg';
import Moon from '../../../shared-ui/images/moon.svg';
import { LandingSectionProps } from '../../lib/types';
import { moonRock, sunRays } from './LandingSection.animations';

const LandingSection: React.FC<LandingSectionProps> = ({ isDay, setIsDay }) => {
  return (
    <StyledLandingSectionContainer>
      <ToggleMode isDay={isDay} setIsDay={setIsDay} location={'main-site'} />
      {isDay ? (
        <StyledStar animate="animate" variants={sunRays} src={Sun} />
      ) : (
        <StyledStar animate="animate" variants={moonRock} src={Moon} />
      )}
      <StyledLandingTextContainer>
        <StyledHackathonText>HackBeanpot 2024</StyledHackathonText>
        <StyledThemeText>Under the Sea</StyledThemeText>
        <StyledThemeTextSmall>February 10-12, 2024</StyledThemeTextSmall>
        <StyledThemeTextParagraph> @ Wood Mackenzie (Formerly known as PowerAdvocate) <br/> 179 Lincoln St, Boston, MA 02111</StyledThemeTextParagraph>
        {/* <LocationTimeSection isDay={isDay} /> */}
        <StyledLandingButtonContainer
          btnText="Apply"
          btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
          newTab
        />
      </StyledLandingTextContainer>
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
