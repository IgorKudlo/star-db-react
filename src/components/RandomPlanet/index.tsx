import React, {FC, useEffect, useState} from 'react';
import { SwapiService } from '../../services/swapi-service';
import { Spinner } from '../Spinner';
import { ErrorIndicator } from '../ErrorIndicator';
import './styles.css';

export const RandomPlanet: FC = () => {

  const [planet, setPlanet] = useState({
    id: 0,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
  const content = hasData ? <PlanetView planet={planet} /> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const PlanetView = ({ planet }: any) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
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