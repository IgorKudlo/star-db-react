import React, { FC } from 'react';
import './styles.css';

export const Spinner: FC = () => {
  return (
    <div className="lds-css">
      <div className="lds-double-ring">
        <div />
        <div />
      </div>
    </div>
  );
};
