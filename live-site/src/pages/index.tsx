import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import Header from '../../../shared-ui/components/header/Header';
import liveSiteTabInfo from '../../lib/data';
import '../../../shared-ui/style/globals.css';
import Background from '../../../shared-ui/components/backgrounds/Backgrounds';
import MeetTheTeamSection from '../../../shared-ui/components/meet-the-team/MeetTheTeamSection';
import Footer from '../../../shared-ui/components/footer/Footer';
import ResourcesSection from '../../components/resources-section/ResourcesSection';
import { StyledPageContainer } from '../../../shared-ui/styled-components/Background.styles';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';

const IndexPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isDesktop = useMatchMedia(min.tablet);

  const getBackgroundClassName = (): string => {
    if (isDesktop) {
      return 'day-background-desktop';
    }
    return 'mobile-light-background';
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <StyledPageContainer className={getBackgroundClassName()}>
      <Header tabs={liveSiteTabInfo} isDay={true} />
      <Background isDay={true} />
      <ResourcesSection />
      <MeetTheTeamSection />
      <Footer tabs={liveSiteTabInfo} isDay />
    </StyledPageContainer>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
