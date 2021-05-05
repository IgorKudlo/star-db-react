import React, { FC, useState } from 'react';
import { ItemList } from '../ItemList';
import { PersonDetails } from '../PersonDetails';

export const PeoplePage: FC = () => {

  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  const onPersonSelected = (id: string): void => {
    setSelectedPerson(id);
  };

  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ItemList onItemSelected={onPersonSelected} />
      </div>
      <div className="col-md-6">
        <PersonDetails personId={selectedPerson} />
      </div>
    </div>
  );
};