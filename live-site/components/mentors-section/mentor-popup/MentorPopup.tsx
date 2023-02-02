import React from 'react';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import { MentorPopupProps } from '../../../lib/types';
import {
  StyledContainer,
  StyledHeader,
  StyledModal,
  StyledMentorName,
  StyledText,
  StyledContactButtonContainer,
  StyledCloseButtonContainer
} from './MentorPopup.styles';
import PopupCloseButton from '../../../../shared-ui/images/popup-close-icon.png';
import { min, } from '../../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';

const MentorPopup: React.FC<MentorPopupProps> = ({ mentor, onClose }) => {
  if (!mentor) {
    return <></>;
  }
  const notMobile = useMatchMedia(min.mobile);

  let mentorImageSize = 420;
  if(notMobile) {
    mentorImageSize = 250;
  }

  return (
    <StyledModal>
      <StyledContainer>
        <div>
          <img
            width={mentorImageSize}
            height={mentorImageSize}
            alt={`Image of ${mentor.name}`}
            src={mentor.imageUrl}
          />
          <StyledMentorName>{mentor.name}</StyledMentorName>
          <StyledText>
            {mentor.position ? `${mentor.position}, ` : ''}
            {mentor.company}
          </StyledText>
        </div>
        <div>
          <StyledCloseButtonContainer>
            <img
              width={32}
              height={36}
              alt={`Close`}
              src={PopupCloseButton}
              onClick={onClose}
            />
          </StyledCloseButtonContainer>
          {mentor.shifts.length > 0 && (
            <>
              <StyledHeader>SHIFTS</StyledHeader>
              {mentor.shifts.map((shift) => (
                <StyledText key={shift}>{shift}</StyledText>
              ))}
            </>
          )}
          {mentor.expertise.length > 0 && (
            <>
              <StyledHeader>EXPERTISE</StyledHeader>
              {mentor.expertise.map((expertise) => (
                <StyledText key={expertise}>{expertise}</StyledText>
              ))}
            </>
          )}
          <StyledContactButtonContainer>
            <PrimaryButton btnText="Contact" />
          </StyledContactButtonContainer>
        </div>
      </StyledContainer>
    </StyledModal>
  );
};

export default MentorPopup;
