import React from 'react';
import parse from 'html-react-parser';
import truncate from 'truncate-html';

interface Props {
  value: string;
  max: number;
}

const TruncatedTextWithHTML: React.FC<Props> = ({ value, max }) => {
  return <span>{parse(truncate(value, max))}</span>;
};

export default TruncatedTextWithHTML;
