import React from 'react';
import './FactFigure.css';

interface FactFigureProps {
    Heading: string;
    Description: string;
    Date: string;
}

const FactFigure: React.FC<FactFigureProps> = ({ Heading, Description, Date }) => {
  return (
    <div className="FactCont1">
      <div className="FactHeading">
        <p>{Heading}</p>
      </div>
      <div className="FactDescription">
        <p>{Description}</p>
      </div>
      <div className="FactDate">
        <p>as of {Date}</p>
      </div>
    </div>
  );
};

export default FactFigure;
