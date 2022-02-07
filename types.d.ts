import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ITechIconProps {
  name: string;
  filename?: string;
  url: string;
}

export interface IResumeSkillProps {
  description: string;
  descriptionIcon: IconDefinition;
  tools: ITechIconProps[];
}

export type ProjectData = {
  name: string;
  url: string;
  date: Date;
  description: string;
  repoURL?: string;
  stack?: ITechIconProps[];
};
