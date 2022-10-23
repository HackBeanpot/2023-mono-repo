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

type MailchimpResult = 'success' | 'error';

export interface MailchimpResponse {
  result: MailchimpResult;
  msg: string;
}

export interface MailchimpFields {
  [key: string]: string;
}
