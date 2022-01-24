import { FunctionComponent, ReactNode } from 'react';

interface ISectionTitleProps {
  text: string;
  size?: string;
  animate?: boolean;
}
export const SectionTitle: FunctionComponent<ISectionTitleProps> = ({
  text,
  size = '4xl',
  animate = false,
}) => {
  const text_size = `text-${size}`;
  const animation = animate ? 'animate-blink' : '';
  return (
    <h1 className={`${text_size}`}>
      {text}
      <p className={`inline ${animation}`}>_</p>
    </h1>
  );
};
interface ISectionProps {
  id?: string;
  children: ReactNode;
}
export const Section: FunctionComponent<ISectionProps> = ({ id, children }) => {
  return (
    <section id={id} className="p-6 space-y-3">
      {children}
    </section>
  );
};
