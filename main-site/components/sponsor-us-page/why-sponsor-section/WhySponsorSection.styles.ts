import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { H4, P } from '../../../../shared-ui/style/typography';
import { max, min } from '../../../../shared-ui/lib/responsive';
import { SponsorUsLandingProps } from '../../../lib/types';

const StyledWhySponsorContainer = styled.div`
  position: relative;
  display: flex;
  right: 0;
  justify-content: right;

  @media ${max.tablet} {
    padding-bottom: 5em;
  }
  @media ${min.tablet} {
    padding-bottom: 7em;
  }
  @media ${min.desktop} {
    padding-top: 5em;
    padding-bottom: 10em;
  }
`;

const StyledReason = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const StyledDescriptionContainer = styled.div`
  padding-top: 2em;
`;

const HideInMobileView = styled.div`
  @media ${max.tablet} {
    display: none;
  }
  @media ${min.tablet} {
    display: block;
  }
  @media ${min.desktop} {
    display: block;
  }
`;

const ShowInMobileView = styled.div`
  @media ${max.tablet} {
    display: block;
  }
  @media ${min.tablet} {
    display: none;
  }
  @media ${min.desktop} {
    display: none;
  }
`;

const StyledTextContainer = styled.div<SponsorUsLandingProps>`
  margin-top: 0;
  background-color: ${(props): string =>
    props.isDay ? colors.TEXT_BOX_BLUE : colors.NIGHT_TEXT_BOX_BLUE};

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media ${max.tablet} {
    width: 20em;
    padding: 1.5em;
    border-radius: 1em 0em 0em 1em;
  }

  @media ${min.tablet} {
    width: 40em;
    padding: 2.5em;
    border-radius: 2em 0em 0em 2em;
  }

  @media ${min.desktop} {
    width: 52em;
    padding: 4em;
    border-radius: 3em 0em 0em 3em;
  }
`;

const StyledHeaderLabel = styled(H4)`
  color: white;
  margin-bottom: 0.5em;
  letter-spacing: 1px;

  @media ${max.tablet} {
    font-size: 1.4em;
  }
`;

const StyledParagraph = styled(P)`
  @media ${max.tablet} {
    font-size: 0.9em;
  }
`;

const StyledTextSpacing = styled(P)`
  letter-spacing: 0.5px;
`;

const StyledFennecFox = styled.img`
  position: absolute;

  @media ${max.tablet} {
    display: none;
  }

  @media ${min.tablet} {
    right: 2em;
    top: 30em;
    height: 15em;
    width: 15em;
    display: block;
  }

  @media ${min.desktop} {
    right: 7em;
    top: 30em;
    height: 20em;
    width: 20em;
    display: block;
  }

  @media ${min.desktopLg} {
    right: 20em;
    top: 30em;
    display: block;
  }
`;

const StyledItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCenterImage = styled.img`
  align-self: center;
  width: 100%;
  object-fit: cover;
`;

const StyledStarfish = styled.img`
  position: relative;
  padding-right: 2em;
  @media ${max.tablet} {
    width: 15%;
  }
`;

const StyledReasonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export {
  StyledTextContainer,
  StyledParagraph,
  StyledWhySponsorContainer,
  StyledDescriptionContainer,
  StyledCenterImage,
  StyledItemContainer,
  StyledFennecFox,
  StyledHeaderLabel,
  StyledTextSpacing,
  HideInMobileView,
  ShowInMobileView,
  StyledStarfish,
  StyledReasonsContainer,
  StyledReason
};
