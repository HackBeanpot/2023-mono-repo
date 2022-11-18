import React from 'react';
import { TeamColumnProps } from '../../../../lib/types';
import {
  StyledTeamColumn,
  StyledLabel,
  StyledHeadshot,
  ImageContainer,
  StyledImageRow
} from './DesktopTeamColumn.styles';

const DesktopTeamColumn: React.FC<TeamColumnProps> = ({ columnInfo }) => {
  const listOfPictures: string[][] = columnInfo.listOfPictures;
  return (
    <StyledTeamColumn>
      <StyledLabel twoLines={columnInfo.teamLabel == 'Social Outreach'}>
        {columnInfo.teamLabel}
      </StyledLabel>
      <ImageContainer>
        {listOfPictures.map((rowPics: string[]) => (
          <StyledImageRow>
            {rowPics.map((pic: string) => (
              <StyledHeadshot src={pic} />
            ))}
          </StyledImageRow>
        ))}
      </ImageContainer>
    </StyledTeamColumn>
  );
};

export default DesktopTeamColumn;