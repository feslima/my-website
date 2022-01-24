import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faDatabase,
  faLaptopCode,
  faCubes,
  faScrewdriverWrench,
  faPaintBrush,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';

export interface IToolIconProps {
  name: string;
  bracket?: string;
  filename?: string;
  url: string;
}

export interface IResumeSkillProps {
  description: string;
  descriptionIcon: IconDefinition;
  tools: IToolIconProps[];
}

export const resumeSkills: IResumeSkillProps[] = [
  {
    description: 'Programming Languages',
    descriptionIcon: faLaptopCode,
    tools: [
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'JavaScript', url: 'https://www.javascript.com/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    ],
  },
  {
    description: 'Frameworks',
    descriptionIcon: faCubes,
    tools: [
      { name: 'Django', url: 'https://docs.djangoproject.com/en/4.0/' },
      {
        name: 'pytest',
        filename: 'pytest.png',
        url: 'https://docs.pytest.org/en/stable/contents.html',
      },
      { name: 'Flask', url: 'https://flask.palletsprojects.com/en/2.0.x/' },
      { name: 'React', url: 'https://reactjs.org/' },
      { name: 'NextJS', url: 'https://nextjs.org/' },
      {
        name: 'Tailwind CSS',
        filename: 'tailwindcss.svg',
        url: 'https://tailwindcss.com/',
      },
      {
        name: 'Bootstrap 5',
        filename: 'bootstrap.svg',
        url: 'https://getbootstrap.com/',
      },
    ],
  },
  {
    description: 'Mark up languages',
    descriptionIcon: faPaintBrush,
    tools: [
      {
        name: 'HTML5',
        filename: 'html.svg',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        name: 'CSS3',
        filename: 'css.svg',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      { name: 'Markdown', url: 'https://www.markdownguide.org/' },
    ],
  },
  {
    description: 'SQL databases',
    descriptionIcon: faDatabase,
    tools: [
      { name: 'SQLite', url: 'https://www.sqlite.org/index.html' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
    ],
  },
  {
    description: 'NoSQL databases',
    descriptionIcon: faDatabase,
    tools: [{ name: 'Redis', url: 'https://www.sqlite.org/index.html' }],
  },
  {
    description: 'Cloud Infrastructure',
    descriptionIcon: faCloud,
    tools: [
      {
        name: 'AWS EC2',
        filename: 'ec2.svg',
        url: 'https://aws.amazon.com/ec2/',
      },
      {
        name: 'AWS S3',
        filename: 's3.svg',
        url: 'https://aws.amazon.com/s3/',
      },
      {
        name: 'AWS RDS',
        filename: 'rds.svg',
        url: 'https://aws.amazon.com/rds/',
      },
      {
        name: 'AWS CloudFront',
        filename: 'cloudfront.svg',
        url: 'https://aws.amazon.com/cloudfront/',
      },
      { name: 'Pulumi', url: 'https://www.pulumi.com/' },
    ],
  },
  {
    description: 'Other tools',
    descriptionIcon: faScrewdriverWrench,
    tools: [
      {
        name: 'Docker',
        filename: 'docker.png',
        url: 'https://www.docker.com/',
      },
      { name: 'Bash', url: 'https://www.gnu.org/software/bash/' },
      { name: 'mypy', url: 'https://mypy.readthedocs.io/en/stable/' },
      { name: 'Git', url: 'http://git-scm.com/' },
      { name: 'GitHub', url: 'https://github.com/' },
    ],
  },
];
