import Image from 'next/image';
import React from 'react';
import { ITechIconProps } from '../types';

const TechIcon: React.FC<ITechIconProps> = ({ name, url, filename }) => {
  const location = filename ? filename : `${name.toLowerCase()}.svg`;
  return (
    <a
      className="flex items-center space-x-2"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        width={20}
        height={20}
        className="inline"
        src={`/images/icons/${location}`}
        alt=""
      />
      <p>{name}</p>
    </a>
  );
};
export default TechIcon;
