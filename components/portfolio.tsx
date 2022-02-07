import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import Projects from '../data/portfolio';
import { ITechIconProps, ProjectData, StatusType } from '../types';
import string2HTMLParser from '../utils/parsers';
import { Section, SectionTitle } from './section';
import TechIcon from './tech-icon';

const ProjectName: FunctionComponent<{ name: string; url: string }> = ({
  name,
  url,
}) => {
  return (
    <h4 className="text-lg font-bold flex space-x-2">
      <div>{name}</div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fas', 'link']} />
      </a>
    </h4>
  );
};

const ProjectDate: FunctionComponent<{ date: Date }> = ({ date }) => {
  return (
    <h4 className="text-sm sm:text-base">
      {new Intl.DateTimeFormat(undefined, {
        month: 'long',
        year: 'numeric',
      }).format(date)}
    </h4>
  );
};

const ProjectStatus: FunctionComponent<{ status: StatusType }> = ({
  status,
}) => {
  let icon: IconProp;
  let iconColor: string;
  switch (status) {
    case 'Active':
      icon = ['far', 'circle-check'];
      iconColor = 'text-green-500';
      break;

    case 'Archived':
      icon = ['far', 'circle-xmark'];
      iconColor = 'text-red-500';
      break;

    case 'Paused':
      icon = ['far', 'circle-question'];
      iconColor = 'text-yellow-500';
      break;

    default:
      throw new Error('Invalid type.');
  }
  return (
    <div className="flex space-x-2 content-center align-middle">
      <p className="font-semibold">Status:</p>
      <p>{status}</p>
      <div className={iconColor}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

const ProjectRepoLink: FunctionComponent<{ url: string }> = ({ url }) => {
  return (
    <div className="flex space-x-4">
      <p className="font-semibold">Check it out on GitHub:</p>
      <TechIcon name="" url={url} filename="github.svg" />
    </div>
  );
};

const ProjectDescription: FunctionComponent<{ description: string }> = ({
  description,
}) => {
  return (
    <p>
      <b>Description: </b>
      {string2HTMLParser(description)}
    </p>
  );
};

const ProjectStack: FunctionComponent<{ stack: ITechIconProps[] }> = ({
  stack,
}) => {
  return (
    <>
      <p className="text-center font-semibold">Tech used</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-2 border-y-[1px] border-black">
        {stack.map(({ name, url, filename }) => (
          <div className="flex" key={name}>
            <TechIcon name={name} url={url} filename={filename} />
          </div>
        ))}
      </div>
    </>
  );
};

const Project: FunctionComponent<{ data: ProjectData }> = ({
  data: { name, url, date, status, description, repoURL, stack },
}) => {
  return (
    <>
      <div className="flex justify-between flex-col sm:flex-row">
        <ProjectName name={name} url={url} />
        <ProjectDate date={date} />
      </div>
      <ProjectStatus status={status} />
      {repoURL && <ProjectRepoLink url={repoURL} />}
      <ProjectDescription description={description} />
      {stack && <ProjectStack stack={stack} />}
    </>
  );
};

const Portfolio: FunctionComponent = () => {
  return (
    <Section id="portfolio">
      <SectionTitle text="Portfolio" animate={true} />
      <h3 className="text-xl text-bold">
        These are some of the projects I'm working (or have worked) on:
      </h3>
      <div className="grid grid-cols-1 p-2 text-base space-y-4">
        {Projects.map((project, index) => (
          <div
            key={`project${index}`}
            className="mx-auto w-full space-y-2 flex flex-col justify-center"
          >
            <Project data={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
