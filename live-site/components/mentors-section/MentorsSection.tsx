import React from 'react';
import useMatchMedia from 'react-use-match-media';
import Dropdown from '../../../shared-ui/components/dropdown/Dropdown';
import { max } from '../../../shared-ui/lib/responsive';
import { useAirtableApi } from '../../src/hooks/useAirtable';
import { StyledMentorsSection, StyledMentorsFilterRadio, StyledMentorsFilterDropdown, StyledMentorsHeader } from './MentorsSection.styles';

const MentorsSection: React.FC = () => {
  const isMobile = useMatchMedia(max.tabletLg);

  const { data } = useAirtableApi('Mentors', 'mentors');
  const positionsArr = Array.from(new Set(data.map(mentor => mentor.fields.position)));
  const companiesArr = Array.from(new Set(data.map(mentor => mentor.fields.company)));

  return (
    <StyledMentorsSection>
      <Dropdown options={positionsArr} />
      <StyledMentorsHeader> Mentors </StyledMentorsHeader>
      <StyledMentorsFilterDropdown id="position-filter">
        {positionsArr.map((currPosition: string) => (
          <option value={currPosition}>Position: {currPosition}</option>
        ))}
      </StyledMentorsFilterDropdown>
      {isMobile && <br />}
      <StyledMentorsFilterDropdown id="company-filter">
        {companiesArr.map((currCompany: string) => (
          <option value={currCompany}>Company: {currCompany}</option>
        ))}
      </StyledMentorsFilterDropdown>
      <StyledMentorsFilterRadio>
        <input type="radio" id="onShiftMentors" name="mentors_filter" value="Mentors on shift now" />
        <label htmlFor="onShiftMentors">Mentors on shift now</label><br />
        <input type="radio" id="allMentors" name="mentors_filter" value="All mentors" />
        <label htmlFor="allMentors">All mentors</label><br />
      </StyledMentorsFilterRadio>
      {data.map((currMentor) => (
        <>
          <p>{currMentor.fields.company}</p>
          <p>{currMentor.fields.name}</p>
          <p>{currMentor.fields.position}</p>
        </>
      ))}
    </StyledMentorsSection>
  );
};

export default MentorsSection;
