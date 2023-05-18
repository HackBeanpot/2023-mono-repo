export interface FaqData {
  id: number;
  question: string;
  answer: string;
}

export interface FaqItemProps {
  id: number;
  question: string;
  answer: string;
  selectedQuestion: number;
  setSelectedQuestion: (id: number) => void;
}
export type SectionData = AboutSectionData;

export interface AboutSectionData {
  title: string;
  description: string;
}

export interface LandingSectionProps {
  isDay: boolean;
  setIsDay: (isDay: boolean) => void;
}

export interface TestimonialData {
  id: number;
  author: string;
  year: string;
  quote: string;
}

export interface TestimonialCardProps {
  id: number;
  author: string;
  year: string;
  quote: string;
  currentIndex: number;
}

export interface StyledTestimonialCardQuoteProps {
  quote: string;
}

export interface LeftOrRightTestimonialCardProps {
  testimonial: TestimonialData;
}

export interface StyledCactusButtonsProps {
  isToggled: boolean;
}

export interface PastProjectData {
  title: string;
  members: string;
  description: string;
  btnLink: string;
}

export interface StyledSponsorsImageProps {
  level: string;
}

export interface EventsCalendarData {
  events_header: string;
  events_subheader: string;
  events_p_bolded: string;
  prerequisites: string;
}

