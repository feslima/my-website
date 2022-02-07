import parse from 'react-html-parser';

const string2HTMLParser = (stringToParse: string) => {
  return parse(stringToParse.replace(/(?:\r\n|\r|\n)/g, '<br>'));
};

export default string2HTMLParser;
