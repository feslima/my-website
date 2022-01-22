import { FunctionComponent } from 'react';
import { Section, SectionTitle } from './section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

interface IToolIconProps {
  name: string;
  url: string;
}
const ToolIcon: FunctionComponent<IToolIconProps> = ({ name, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        className="inline w-6 h-6"
        src={`images/icons/${name.toLowerCase()}.svg`}
        alt=""
      />{' '}
      {name}
    </a>
  );
};

const Resume: FunctionComponent<{}> = () => {
  return (
    <Section id="resume">
      <SectionTitle text="Resume" animate={true} />
      <h3 className="text-lg text-bold">What can I do?</h3>
      <p>
        I'm able to develop several tasks related to building a web presence.
        Some of my skills/tooling are:
      </p>
      <ul className="list-none px-2">
        <li>
          <FontAwesomeIcon icon={faDatabase} /> Relational (SQL) databases:
          <ul className="list-none px-3 mt-3">
            <li>
              <ToolIcon name="SQLite" url="https://www.sqlite.org/index.html" />
            </li>
            <li>
              <ToolIcon name="PostgreSQL" url="https://www.postgresql.org/" />
            </li>
          </ul>
        </li>
      </ul>
    </Section>
  );
};

export default Resume;
