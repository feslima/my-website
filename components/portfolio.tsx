import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useEffect, useState } from 'react';
import Projects from '../data/portfolio';
import { ITechIconProps, ProjectData, StatusType } from '../types';
import string2HTMLParser from '../utils/parsers';
import { Section, SectionTitle } from './section';
import TechIcon from './tech-icon';
import { useTranslation, useSelectedLanguage } from 'next-export-i18n';
import localeLookUp from '../data/i18n';
import capitalize from '../utils/capitalize';

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

type localeKey = keyof typeof localeLookUp;
const ProjectDate: FunctionComponent<{ date: Date }> = ({ date }) => {
  const { lang }: { lang: localeKey } = useSelectedLanguage();

  return (
    <h4 className="text-sm sm:text-base">
      {capitalize(
        new Intl.DateTimeFormat(localeLookUp[lang], {
          month: 'long',
          year: 'numeric',
        }).format(date)
      )}
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

const ProjectRepoLink: FunctionComponent<{ url: string }> = ({ url }) => {
  const { t } = useTranslation();
  return (
    <div className="flex space-x-4">
      <p className="font-semibold">{t('portfolio.githubCheck')}:</p>
      <TechIcon name="" url={url} filename="github.svg" />
    </div>
  );
};

const ProjectDescription: FunctionComponent<{ description: string }> = ({
  description,
}) => {
  const { t } = useTranslation();
  return (
    <p>
      <b>{t('portfolio.description')}: </b>
      {string2HTMLParser(description)}
    </p>
  );
};

const ProjectStack: FunctionComponent<{ stack: ITechIconProps[] }> = ({
  stack,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-center font-semibold">{t('portfolio.tech')}</p>
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
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-between flex-col sm:flex-row">
        <ProjectName name={t(`portfolio.projects.${name}.name`)} url={url} />
        <ProjectDate date={date} />
      </div>
      <ProjectStatus status={status} />
      {repoURL && <ProjectRepoLink url={repoURL} />}
      <ProjectDescription
        description={t(`portfolio.projects.${name}.description`)}
      />
      {stack && <ProjectStack stack={stack} />}
    </>
  );
};

const Portfolio: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Section id="portfolio">
      <SectionTitle text={t('portfolio.title')} animate={true} />
      <h3 className="text-xl text-bold">{t('portfolio.subtitle')}</h3>
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
