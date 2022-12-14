import React from 'react';
import SecondaryButton from '../../../../shared-ui/components/secondary-button/SecondaryButton';
import { StyledSelection } from './JudgingSelection.styles';

const JudgingSelection: React.FC = () => {
  
  return (
    <div>
      <StyledSelection> Who are you? </StyledSelection>
      <span>
        <SecondaryButton btnText='I am a judge' btnLink='judges' />
        <SecondaryButton btnText='I am a hacker' btnLink='hackers' />
      </span>
    </div>
  );
};

export default JudgingSelection;