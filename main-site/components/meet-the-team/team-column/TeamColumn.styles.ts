import styled from "styled-components";
import { max } from "../../../../shared-ui/lib/responsive";
import { StyledTeamLabelProps } from "../../../../shared-ui/lib/types";
import { colors } from "../../../../shared-ui/style/colors";
import { P } from "../../../../shared-ui/style/typography";

const StyledTeamColumn = styled.div`
flex-direction: column;
width: 11em;
@media ${max.tabletLg} {
    width: 10.5em;
  }
`;

const StyledLabel = styled(P)<StyledTeamLabelProps>`
width: 8em;
margin-bottom: ${(props): string => (props.twoLines ? '-1.2em' : '0')};
color: ${colors.TEXT_BROWN};
letter-spacing: 0.1em;
`;

const StyledHeadshot = styled.img`
padding-top: 2em;
width: 8.5em;
@media ${max.tabletLg} {
    width: 6.8em;
  }
`;

export {
    StyledTeamColumn, 
    StyledLabel, 
    StyledHeadshot
}