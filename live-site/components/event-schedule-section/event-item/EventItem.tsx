import React from "react";
import { StyledEventItemContainer, StyledEventItemHeader,StyledEventItemTime, StyledEventItemTopic } from "./EventItem.styles";

const EventItem: React.FC = () => {
    return (
        <StyledEventItemContainer>
            <StyledEventItemTime>5:00 - 6:00 pm</StyledEventItemTime>
            <StyledEventItemTopic>launch event</StyledEventItemTopic>
            <StyledEventItemHeader>Opening Ceremony!!!!</StyledEventItemHeader>
        </StyledEventItemContainer>



    )
}
export default EventItem;
