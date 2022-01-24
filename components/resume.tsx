import { FunctionComponent } from 'react';
import { Section, SectionTitle } from './section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Disclosure, Transition } from '@headlessui/react';
import {
  IResumeSkillProps,
  IToolIconProps,
  resumeSkills,
} from '../data/resume-skills';

const ToolIcon: FunctionComponent<IToolIconProps> = ({
  name,
  url,
  bracket = '',
  filename,
}) => {
  const location = filename ? filename : `${name.toLowerCase()}.svg`;
  return (
    <a
      className="flex items-center space-x-2"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="inline w-6 h-6" src={`images/icons/${location}`} alt="" />
      <p>
        {name}
        {bracket ? ` [${bracket}]` : ''}
      </p>
    </a>
  );
};

const ResumeSkill: FunctionComponent<IResumeSkillProps> = ({
  description,
  descriptionIcon,
  tools,
}) => {
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 px-4 rounded-lg bg-fuchsia-300 font-medium w-full flex items-center">
            <div className="grow">
              <FontAwesomeIcon icon={descriptionIcon} />{' '}
              <span>{description} </span>
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transition-transform duration-300 ${
                open ? 'transform rotate-180' : ''
              }`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-200 ease-linear"
            enterFrom="transform translate-y-0 opacity-0"
            enterTo="transform translate-y-1/4 opacity-100"
            leave="transition duration-200 ease-linear"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform -translate-y-1/4 opacity-0"
          >
            <Disclosure.Panel className="">
              <ul className="list-none px-3 mt-3 gap-x-0 space-y-3 columns-2">
                {tools.map(({ name, url, bracket, filename }) => (
                  <li>
                    <ToolIcon
                      name={name}
                      url={url}
                      bracket={bracket}
                      filename={filename}
                    />
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const Resume: FunctionComponent<{}> = () => {
  return (
    <Section id="resume">
      <SectionTitle text="Resume" animate={true} />
      <h3 className="text-lg text-bold">What can I do?</h3>
      <p>
        I'm able to develop several tasks related to building a web presence.
      </p>
      <p>
        I call myself a backend developer because that is my area of focus.
        However, I do know my way around some frontend frameworks/tools.
      </p>
      <p>These are some of my skills/tooling:</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-x-4">
        {resumeSkills.map(({ description, descriptionIcon, tools }) => (
          <div className="my-2 mx-auto w-full">
            <ResumeSkill
              description={description}
              descriptionIcon={descriptionIcon}
              tools={tools}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Resume;
