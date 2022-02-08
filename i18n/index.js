let en = require('./translations.en.json');
let ptBr = require('./translations.pt_br.json');

const i18n = {
  translations: {
    en,
    ptBr,
  },
  defaultLang: "ptBr",
  useBrowserDefault: true,
};

module.exports = i18n;
