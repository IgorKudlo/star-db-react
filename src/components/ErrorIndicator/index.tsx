import React, { FC } from 'react';
import icon from './death-star.png';
import './styles.css';

export const ErrorIndicator: FC = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="Error icon" />
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};