import React, { FC, ReactNode } from "react";

interface IRowInterface {
  left: ReactNode,
  right: ReactNode,
}

export const Row: FC<IRowInterface> = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
};