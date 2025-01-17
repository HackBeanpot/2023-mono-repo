import React, { useEffect, useState } from 'react';
import {
  StyledHackathonText,
  StyledThemeText,
  StyledLandingButtonContainer,
  StyledLandingSectionContainer,
  StyledLandingTextContainer,
  StyledThemeTextSmall,
  StyledThemeTextParagraph,
  StyledBubble1,
  StyledBubble2,
  StyledFish,
  StyledJellyfish,
  StyledWhale,
  StyledCountdown,
  StyledHourglass,
  StyledCountdownContainer
} from './LandingSection.styles';
import Bubble from '../../../shared-ui/images/bubbles.svg';
import Bubble2 from '../../../shared-ui/images/bubbles2.svg';
import Fish from '../../../shared-ui/images/fish.svg';
import Jellyfish from '../../../shared-ui/images/jellyfish.svg';
import Whale from '../../../shared-ui/images/whale.svg';
import ToggleMode from '../../../shared-ui/components/toggle-mode/ToggleMode';
import { CountdownProps, LandingSectionProps } from '../../lib/types';
import { CountdownData } from '../../lib/data';
import hourglass from '../../../shared-ui/images/hourglass.svg';

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = +new Date();
    const target = +new Date(targetDate);

    if (target > now) {
      const difference = target - now;
      return {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
      };
    }

    // return null if the target date is in the past
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeUnit = (value: number, unit: string): string => {
    return value === 1 ? unit : unit + 's';
  };

  if (!timeLeft) {
    return <div>{'No longer accepting applications'}</div>;
  }

  return (
    <div>
      {timeLeft.weeks} {getTimeUnit(timeLeft.weeks, 'week')}, 
      {' '}{timeLeft.days} {getTimeUnit(timeLeft.days, 'day')},
      {' '}{timeLeft.hours} {getTimeUnit(timeLeft.hours, 'hour')} left to apply!
    </div>
  );
};

const LandingSection: React.FC<LandingSectionProps> = ({ isDay, setIsDay }) => {
  return (
    <StyledLandingSectionContainer>
      <ToggleMode isDay={isDay} setIsDay={setIsDay} location={'main-site'} />
      <StyledBubble1 src={Bubble} />
      <StyledBubble2 src={Bubble2} />
      <StyledFish src={Fish} />
      <StyledJellyfish src={Jellyfish} />
      <StyledWhale src={Whale} />
      <StyledLandingTextContainer>
        <StyledHackathonText>HackBeanpot 2024</StyledHackathonText>
        <StyledThemeText>Under the Sea</StyledThemeText>
        <StyledThemeTextSmall>Coming back in 2025!</StyledThemeTextSmall>
        {/* {<StyledThemeTextParagraph></StyledThemeTextParagraph>} */}
        {/* <LocationTimeSection isDay={isDay} /> */}
        <StyledLandingButtonContainer
          btnText="Apply"
          btnLink="https://apply.hackbeanpot.com"
          isApplyButton={true}
          newTab
        />
        <StyledCountdownContainer>
          <StyledHourglass src={hourglass} />
          <StyledCountdown>
            <Countdown targetDate={CountdownData[0].targetDate} />
          </StyledCountdown>
        </StyledCountdownContainer>
      </StyledLandingTextContainer>
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
