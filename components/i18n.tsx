import { FunctionComponent } from 'react';
import { LanguageSwitcher } from 'next-export-i18n';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'next-export-i18n';

const LanguageToggle: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center space-x-2">
      <p className="text-sm self-center">{t('languageToggle')}:</p>
      <LanguageSwitcher lang="ptBr">
        <ReactCountryFlag countryCode="BR" className="self-center" />
      </LanguageSwitcher>
      <LanguageSwitcher lang="en">
        <ReactCountryFlag countryCode="US" className="self-center" />
      </LanguageSwitcher>
    </div>
  );
};

export default LanguageToggle;
