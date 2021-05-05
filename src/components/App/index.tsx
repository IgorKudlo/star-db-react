import React, {FC, useState} from 'react';
import { Header } from '../Header';
import { RandomPlanet } from '../RandomPlanet';
import { PeoplePage } from '../PeoplePage';
import './styles.css';

export const App: FC = () => {

  const [showRandomPlanet, setShowRandomPlanet] = useState<boolean>(true);

  const toggleRandomPlanet = (e :React.MouseEvent<HTMLButtonElement>): void => {
    setShowRandomPlanet(!showRandomPlanet);
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

      <PeoplePage />
    </div>
  );
};