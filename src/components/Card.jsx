import React from "react";

const Card = ({ country }) => {
  const img = country?.flags.png;

  return (
    <>
      <div className="card__country">
        <h1 className="h1">{country?.name.common}</h1>
        <div className="card__flag">
          <img
            className="card__img"
            src={country?.flags.png}
            alt="{country?.flags.alt}"
          />
        </div>
        <div className="card__info">
          <ul className="ul">
            <li>
              <span className="title">Nombre:</span> {country?.altSpellings[1]}
            </li>
            <li>
              <span className="title">Capital:</span> {country?.capital}
            </li>
            <li>
              <span className="title">Población:</span>{" "}
              {country?.population.toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
