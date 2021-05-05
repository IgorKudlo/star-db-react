import React, {FC, useEffect, useState} from 'react';
import { SwapiService } from '../../services/swapi-service';
import { Spinner } from '../Spinner';
import { PersonType } from '../../types/person';
import './styles.css';

interface ItemListProps {
  onItemSelected: (id: string) => void
}

export const ItemList: FC<ItemListProps> = ({ onItemSelected }) => {

  const [peopleList, setPeopleList] = useState<Array<PersonType> | null>(null);

  useEffect(() => {
    const swapiService = new SwapiService();
    swapiService
      .getAllPeople()
      .then((peopleList) => {
        setPeopleList(peopleList);
      });
  }, []);

  if (!peopleList) {
    return <Spinner />
  }

  const renderItems = (arr: Array<PersonType>) => {
    return arr.map((person) => (
      <li
        className="list-group-item"
        key={person.id}
        onClick={() => onItemSelected(person.id)}
      >
        {person.name}
      </li>
    ));
  };

  const items = renderItems(peopleList);

  return (
    <div>
      <ul className="item-list list-group">
        {items}
      </ul>
    </div>
  );
};