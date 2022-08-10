import * as React from 'react';
import type { HeadFC } from 'gatsby';
import ExampleButton from '../../../shared-ui/components/example-button/ExampleButton';

const IndexPage: React.FC = () => {
  return (
    <div>
      Welcome to our live site!!!! <ExampleButton />
    </div>
  );
};

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>;
