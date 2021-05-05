import React, { FC, useEffect, useState } from 'react';
import { SwapiService } from '../../services/swapi-service';
import { PersonType } from '../../types/person';
import './styles.css';

export const PersonDetails: FC<{personId: string | null}> = ({ personId }) => {

  const [person, setPerson] = useState<PersonType | null>(null);

  useEffect(() => {
    if (personId) {
      const swapiServece = new SwapiService();
      swapiServece.getPerson(personId)
        .then((person) => {
          setPerson(person)
        });
    }
  }, [personId]);


  if (!person) {
    return <span>Select a person from a list</span>
  } else {
    const { id, name, gender, birthYear, eyeColor } = person;
    return (
      <div className="person-details card">
        <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
             alt="person ava" />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};