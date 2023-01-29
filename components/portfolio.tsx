import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Projects from '../data/portfolio';
import { ITechIconProps, ProjectData, StatusType } from '../types';
import string2HTMLParser from '../utils/parsers';
import { Section, SectionTitle } from './section';
import TechIcon from './tech-icon';
import capitalize from '../utils/capitalize';

const ProjectName: React.FC<{ name: string; url: string }> = ({
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

const ProjectDate: React.FC<{ date: Date }> = ({ date }) => {
  return (
    <h4 className="text-sm sm:text-base">
      {capitalize(
        new Intl.DateTimeFormat('en-US', {
          month: 'long',
          year: 'numeric',
        }).format(date)
      )}
    </h4>
  );
};

const ProjectStatus: React.FC<{ status: StatusType }> = ({ status }) => {
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
      iconColor = 'text-yellow-600';
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

const ProjectRepoLink: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div className="flex space-x-4">
      <p className="font-semibold">Check it out on GitHub</p>
      <TechIcon name="" url={url} filename="github.svg" />
    </div>
  );
};

const ProjectDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <p>
      <b>Description</b>
      {string2HTMLParser(description)}
    </p>
  );
};

const ProjectStack: React.FC<{ stack: ITechIconProps[] }> = ({ stack }) => {
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

const portfolioProjects: Record<string, { name: string; description: string }> =
  {
    myWebsite: {
      name: 'Personal website',
      description:
        "This project is the site you are browsing right now. It's a simple static page deployed directly on GitHub Pages.",
    },
    pypix: {
      name: 'PyPIX',
      description:
        'This is a python package for generating static PIX codes used for money transfers in Brazil.\nThis can be used for automation of QR Code generation to improve your software user experience.',
    },
    pyinterboleto: {
      name: 'pyinterboleto',
      description:
        "Python package to handle invoice issuing/querying for legal entities in Brazil via Banco Inter's API.",
    },
    femmeEcommerce: {
      name: "Femme's E-commerce",
      description:
        "This is a fullstack e-commerce website for Femme's Brewery.\n\nFemme is a craft brewery that is established in cities throughout the state of Paraíba in Brazil.",
    },
    metacontrol: {
      name: 'Metacontrol',
      description:
        "This one was initiated during my Masters. In fact, this is the poster child for the whole thing.\n\nIt's an assembly of several areas related to Process Engineering: Linear Algebra, Statistics, Machine Learning (a sub sect of it, called Gaussian Regression), Non Linear Optimization, etc.\n\nAll of these are bundled in a desktop application that has process engineers as end users. This was my first professional experience that involved software development.",
    },
    pyhensad: {
      name: 'pyHENSAD',
      description:
        "This is a desktop software application that also has process engineers (students) as end users.\n\nIt's a re-implementation of an already existing software called HENSAD.",
    },
  };
const Project: React.FC<{ data: ProjectData }> = ({
  data: { name, url, date, status, description, repoURL, stack },
}) => {
  return (
    <>
      <div className="flex justify-between flex-col sm:flex-row">
        <ProjectName name={portfolioProjects[name].name} url={url} />
        <ProjectDate date={date} />
      </div>
      <ProjectStatus status={status} />
      {repoURL && <ProjectRepoLink url={repoURL} />}
      <ProjectDescription description={portfolioProjects[name].description} />
      {stack && <ProjectStack stack={stack} />}
    </>
  );
};

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio">
      <SectionTitle text="Portfolio" animate={true} />
      <h3 className="text-xl text-bold">
        These are some of the projects I'm working (or have worked) on:
      </h3>
      <div className="grid grid-cols-1 p-2 text-base">
        {Projects.map((project, index) => (
          <div
            key={`project${index}`}
            className="mx-auto w-full space-y-2 flex flex-col justify-center pl-4 pb-8 last:pb-0 border-l-2 border-feslima-900 before:bg-feslima-200 before:w-4 before:h-4 before:relative before:right-6 before:top-6 before:border-2 before:border-feslima-900 before:rounded-full"
          >
            <Project data={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
