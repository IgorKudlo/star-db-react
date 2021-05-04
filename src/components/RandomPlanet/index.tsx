import React, { FC, useEffect, useState } from 'react';
import { SwapiService } from '../../services/swapi-service';
import { PlanetType } from '../../types/planet';
import { Spinner } from '../Spinner';
import { ErrorIndicator } from '../ErrorIndicator';
import './styles.css';

export const RandomPlanet: FC = () => {

  const [planet, setPlanet] = useState<PlanetType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const onError = () => {
    setError(true);
    setLoading(false);
  }

  useEffect(() => {
    const id = Math.floor(Math.random()*25) + 2;
    const swapiService = new SwapiService();
    swapiService.getPlanet(id).then((planet) => setPlanet(planet)).catch(onError);
    setLoading(false);
  }, []);

  const hasData = !(loading || error);

  const errorMessage = error ? <ErrorIndicator /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = hasData && planet !== null ? <PlanetView planet={planet} /> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const PlanetView: FC<{planet: PlanetType}> = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="pic-planet" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
