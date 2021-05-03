import React, {FC, useEffect, useState} from 'react';
import { SwapiService } from '../../services/swapi-service';
import './styles.css';

export const RandomPlanet: FC = () => {

  const [state, setState] = useState({
    id: 0,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  });

  useEffect(() => {
    const id = Math.floor(Math.random()*25) + 2;
    const swapiService = new SwapiService();
    swapiService.getPlanet(id).then((planet) => setState({
      id: id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }));
  }, []);

  const { id, name, population, rotationPeriod, diameter } = state;

  return (
    <div className="random-planet jumbotron rounded">
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
    </div>
  );
};