import React from 'react';

import { FaQuoteLeft } from 'react-icons/fa';

const BlockquoteCard = (props) => {
  const { name, text } = props;

  return (
    <div className="blockquote-card">
      <h2 className="bc-text">{text}</h2>
      <h3 className="bc-name">{name}</h3>
      <FaQuoteLeft className="bc-quote" />
    </div>
  );
};

export default BlockquoteCard;
