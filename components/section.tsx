import React from 'react';

interface ISectionTitleProps {
  text: string;
  size?: string;
  animate?: boolean;
}
export const SectionTitle: React.FC<ISectionTitleProps> = ({
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
  children: React.ReactNode;
}
export const Section: React.FC<ISectionProps> = ({ id, children }) => {
  return (
    <section id={id} className="p-6 space-y-3">
      {children}
    </section>
  );
};
