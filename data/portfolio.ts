import { ProjectData } from '../types';
import {
  AWS_CLOUDFRONT,
  AWS_EC2,
  AWS_RDS,
  AWS_S3,
  BOOTSTRAP5,
  CSS,
  DJANGO,
  GIT,
  GITHUB,
  HTML,
  MYPY,
  NEXTJS,
  NUMPY,
  PANDAS,
  PYQT,
  PYTEST,
  PYTHON,
  REACT,
  SCIPY,
  TAILWIND,
  TYPESCRIPT,
} from './stacks';

const Projects: ProjectData[] = [
  {
    name: 'Personal website',
    url: '/',
    date: new Date(2022, 0),
    description: `This project is the site you are browsing right now. It's a simple static page deployed directly on GitHub Pages.`,
    status: 'Active' as const,
    repoURL: 'https://github.com/feslima/my-website',
    stack: [TYPESCRIPT, NEXTJS, REACT, GIT, GITHUB, HTML, CSS, TAILWIND],
  },
  {
    name: 'PyPIX',
    url: 'https://pypi.org/project/pypix-static/',
    date: new Date(2021, 5),
    description: `This is a python package for generating static PIX codes used for money transfers in Brazil.
    This can be used for automation of QR Code generation to improve your software user experience.`,
    status: 'Active' as const,
    repoURL: 'https://github.com/feslima/pypix',
    stack: [PYTHON, PYTEST, MYPY],
  },
  {
    name: 'pyinterboleto',
    url: 'https://pypi.org/project/pyinterboleto/',
    date: new Date(2021, 4),
    description: `Python package to handle invoice issuing/querying for legal entities in Brazil via Banco Inter's API.`,
    status: 'Active' as const,
    repoURL: 'https://github.com/feslima/pyinterboleto',
    stack: [PYTHON, PYTEST, MYPY],
  },
  {
    name: "Femme's E-commerce",
    url: 'https://loja.cervejafemme.com/',
    date: new Date(2021, 3),
    description: `This is a fullstack e-commerce website for Femme's Brewery. 

    Femme is a craft brewery that is established at Campina Grande, Paraíba, Brazil.`,
    status: 'Active' as const,
    stack: [
      PYTHON,
      PYTEST,
      MYPY,
      DJANGO,
      BOOTSTRAP5,
      HTML,
      CSS,
      AWS_CLOUDFRONT,
      AWS_EC2,
      AWS_S3,
      AWS_RDS,
    ],
  },
  {
    name: 'Metacontrol',
    url: 'https://meta-control.net/',
    date: new Date(2019, 2),
    description: `This one was initiated during my Masters. In fact, this is the poster child for the whole thing.

    It's an amalgamation of several areas related to Process Engineering: Linear Algebra, Statistics, Machine Learning (a sub sect of it, called Gaussian Regression), Non Linear Optimization, etc.

    All of these are bundled in a desktop application that has process engineers as end users. This was my first professional experience that involved software development.
    `,
    status: 'Paused' as const,
    repoURL: 'https://github.com/feslima/metacontrol',
    stack: [PYTHON, NUMPY, PANDAS, SCIPY, PYQT],
  },
  {
    name: 'pyHENSAD',
    url: 'https://github.com/feslima/HENSAD',
    date: new Date(2020, 4),
    description: `This is a desktop software application that also has process engineers (students) as end users.
    
    It's a re-implementation of an already existing software called HENSAD.`,
    status: 'Paused' as const,
    repoURL: 'https://github.com/feslima/HENSAD',
    stack: [PYTHON, NUMPY, PANDAS, SCIPY, PYQT],
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());
export default Projects;
