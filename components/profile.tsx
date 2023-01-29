import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const ProfileImage: React.FC = () => {
  return (
    <Image
      className="rounded-full shadow-lg shadow-feslima-500/50 mx-auto sm:mx-0"
      width={200}
      height={300}
      src="/images/avatar.jpg"
      alt=""
    />
  );
};

const ProfileInfo: React.FC = () => {
  return (
    <div className="self-center mt-3 sm:mt-0">
      <h1 className="text-4xl text-center">Felipe Lima</h1>
      <h2 className="text-xl text-center">Backend developer</h2>
      <h3 className="text-md text-center mt-2">feslima93@gmail.com</h3>

      <ProfileSocial />
    </div>
  );
};

const ProfileSocial: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 mt-3">
      <a className="text-3xl" href="https://www.github.com/feslima">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a className="text-3xl" href="https://www.linkedin.com/in/feslima">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <div className="my-3 columns-1 sm:columns-2 flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4">
      <ProfileImage />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
