import { FunctionComponent } from 'react';
import { Section, SectionTitle } from './section';

const Presentation: FunctionComponent<{}> = () => {
  return (
    <Section id="presentation">
      <SectionTitle text="Hi! Welcome" animate={true} />
      <p>
        If you got here I'm assuming you're not lost. Even if you are, maybe
        this could still be productive to you.
      </p>
      <p>
        Anyways, I hope you like it here since this is what I consider the
        entrypoint for my work showcases.
      </p>
    </Section>
  );
};

export default Presentation;
