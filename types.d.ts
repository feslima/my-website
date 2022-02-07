import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ITechIconProps {
  name: string;
  filename?: string;
  url: string;
}

export interface IResumeSkillProps {
  description: string;
  descriptionIcon: IconProp;
  tools: ITechIconProps[];
}

export type StatusType = 'Active' | 'Paused' | 'Archived';
export type ProjectData = {
  name: string;
  url: string;
  date: Date;
  description: string;
  status: StatusType;
  repoURL?: string;
  stack?: ITechIconProps[];
};
