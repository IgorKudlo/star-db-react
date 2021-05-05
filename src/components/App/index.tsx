import React, {FC, useState} from 'react';
import { Header } from '../Header';
import { RandomPlanet } from '../RandomPlanet';
import { ItemList } from '../ItemList';
import { PersonDetails } from '../PersonDetails';
import './styles.css';

export const App: FC = () => {

  const [showRandomPlanet, setShowRandomPlanet] = useState<boolean>(true);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  const toggleRandomPlanet = (e :React.MouseEvent<HTMLButtonElement>): void => {
    setShowRandomPlanet(!showRandomPlanet);
  };

  const onPersonSelected = (id: string): void => {
    setSelectedPerson(id);
  };

  const planet = showRandomPlanet ? <RandomPlanet /> : null;

  return (
    <div className="container">
      <Header />

      {planet}
      <button
        className="toggle-planet btn btn-warning btn-lg"
        onClick={toggleRandomPlanet}>
        Toggle Random Planet
      </button>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    </div>
  );
};