import React from 'react';
import { Section, SectionTitle } from './section';

const Presentation: React.FC = () => {
  return (
    <Section id="presentation">
      <SectionTitle text="Hi! Welcome!" animate={true} />
      <p>
        Thank you for visiting my website. I hope it can be productive to you.
      </p>
    </Section>
  );
};

export default Presentation;
