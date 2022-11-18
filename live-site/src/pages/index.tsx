import React, { useEffect, useState } from 'react';
import type { HeadFC } from 'gatsby';
import Header from '../../../shared-ui/components/header/Header';
import liveSiteTabInfo from '../../lib/data';
import '../../../shared-ui/globals.css';
import Background from '../../../shared-ui/components/backgrounds/Backgrounds';

const IndexPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Header tabs={liveSiteTabInfo} isDay={true} />
      <Background isDay={true} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
