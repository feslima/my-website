import { FunctionComponent } from 'react';
import { Section, SectionTitle } from './section';
import { useTranslation } from 'next-export-i18n';

const Presentation: FunctionComponent<{}> = () => {
  const { t } = useTranslation();

  return (
    <Section id="presentation">
      <SectionTitle text={t('presentation.greeting')} animate={true} />
      <p>{t('presentation.first')}</p>
      <p>{t('presentation.second')}</p>
    </Section>
  );
};

export default Presentation;
