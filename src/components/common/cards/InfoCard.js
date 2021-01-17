import React from 'react';

const InfoCard = (props) => {
  const { icon: Icon, title, description } = props;

  return (
    <div className="info-card">
      <div className="ic-icon-container">{Icon}</div>
      <div className="ic-contents">
        <h2 className="ic-title">{title}</h2>
        <p className="ic-description">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
