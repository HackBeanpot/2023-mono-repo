import styled from 'styled-components';
import { P, H3 } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { max, min } from '../../../lib/responsive';

const StyledMeetCoreContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 8em;
  @media ${max.tabletLg} {
    padding: 4em;
  }
`;

const StyledOurTeamCore = styled(P)`
  color: ${colors.WHITE};
  text-align: left;
  padding-top: 3.5em;
`;

const StyledHeaderCore = styled(H3)`
  text-align: left;
`;

const StyledDescriptionTeamCore = styled(P)`
  color: ${colors.TEXT_BROWN};
  text-align: left;
  padding-top: 1em;
`;

const StyledImageCore = styled.img`
  right: 5em;
  margin: auto;
  width: 100%;
  @media ${min.tabletLg} {
    padding-left: 4em;
  }
  @media ${min.tabletSm} {
    padding-left: 3em;
  }
  @media ${max.tabletLg} {
    width: 65%;
  }
  @media ${max.mobile} {
    width: 85%;
  }
`;

export {
  StyledMeetCoreContainer,
  StyledOurTeamCore,
  StyledHeaderCore,
  StyledDescriptionTeamCore,
  StyledImageCore
};
