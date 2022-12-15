import React from 'react';
import SecondaryButton from '../../../../shared-ui/components/secondary-button/SecondaryButton';
import { StyledJudgingSelection, StyledWhoAreYou, StyledPersonTypeSelect } from './JudgingSelection.styles';

const JudgingSelection: React.FC = () => {
  return (
    <StyledJudgingSelection>
      <StyledWhoAreYou> Who are you? </StyledWhoAreYou>
      <StyledPersonTypeSelect>
        <SecondaryButton btnText='I am a judge' btnLink='judges' />
      </StyledPersonTypeSelect>
      <StyledPersonTypeSelect>
        <SecondaryButton btnText='I am a hacker' btnLink='hackers' />
      </StyledPersonTypeSelect>
    </StyledJudgingSelection>
  );
};

export default JudgingSelection;
