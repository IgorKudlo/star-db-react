import React, { FC, ReactNode, useState } from 'react';
import { ItemList } from '../ItemList';
import { PersonDetails } from '../PersonDetails';
import { Row } from '../Row';

export const PeoplePage: FC = () => {

  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const onPersonSelected = (id: string): void => {
    setSelectedPerson(id);
  };

  const itemList = (
    <ItemList onItemSelected={onPersonSelected} />
  );

  const personDetails = (
    <PersonDetails personId={selectedPerson} />
  );

  return (
    <Row left={itemList} right={personDetails} />
  );
};