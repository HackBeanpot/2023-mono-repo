import styled from 'styled-components';
import { H2 } from '../../../../shared-ui/style/typography';

const StyledJudgingSelection = styled.div`
  padding: 10em;
`;

const StyledWhoAreYou = styled(H2)`
  text-align: center;
  padding-bottom: 2em;
`;

const StyledPersonTypeSelect = styled.span`
  display: inline-block;
  justify-content: center;
  padding: 0 10em;
`;

export { 
  StyledJudgingSelection,
  StyledWhoAreYou,
  StyledPersonTypeSelect
}