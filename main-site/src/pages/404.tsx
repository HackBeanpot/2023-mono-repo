import * as React from 'react';
import styled from 'styled-components';
import DesktopBackground from '../../../shared-ui/images/error-desktop-background.svg';
import { fonts, H1, H4 } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';

const StyledBackgrounds = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const ButtonContainer = styled.div`
padding-top: 19em;
float: right;
padding-right: 6em;
`;

const StyledH1 = styled(H1)`
  padding-top: 1em;
  padding-left: 2em;
  font-size: 5em;
  color: ${colors.HEADER_FOOTER_BLUE};
`;

const StyledH4 = styled(H4)`
  text-align: right;
  padding-top: 3em;
  padding-right: 9em;
  font-size: 1.6em;
  font-family: ${fonts.nunitoSansSemibold};
  color: ${colors.HEADER_FOOTER_BLUE};
`;

const NotFoundPage: React.FC = () => {
  return (
    <>
      <StyledBackgrounds src={DesktopBackground} />
      <StyledH1>
        Uh oh, how did we end <br /> up here?
      </StyledH1>
      <StyledH4>Let's get back to exploring!</StyledH4>
      <ButtonContainer>
      <PrimaryButton btnText = 'return home' btnLink='/'></PrimaryButton>
      </ButtonContainer>
        

    </>
  );
};

export default NotFoundPage;


