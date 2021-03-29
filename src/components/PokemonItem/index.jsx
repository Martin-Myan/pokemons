import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { Link } from 'components';

import styles from './PokemonItem.scss';

import { ReactComponent as EditPosition } from '../../icons/editposition.svg';

const PokemonItem = ({ id, pokemonTitle, data }) => {
  const [pokemonPosition, setPokemonPosition] = useState(false);
  const pokemonPageFromId = `/pokemon/${[id]}`;

  const editPokemonPosition = () => {
    setPokemonPosition(!pokemonPosition);
  };

  const pokemonType = data.types.map((item) => (
    <p key={shortid.generate()}>{item.type.name}</p>
  ));

  return (
    <div className={styles.pokemon_component}>
      <Link
        to={pokemonPageFromId}
        className={styles.pokemon_component__imageBlock}
      >
        <img
          alt="Pokemon-_-Title"
          className={styles.pokemon_component__imageBlock__image}
          src={
            pokemonPosition
              ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
              : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          }
        />
        <h2 className={styles.pokemon_component__imageBlock__title}>
          {pokemonTitle}
        </h2>
      </Link>
      <div className={styles.pokemon_component__btnBlock}>
        <EditPosition
          type="button"
          onClick={editPokemonPosition}
          className={styles.pokemon_component__btnBlock__editPosition}
        />
      </div>

      <div className={styles.pokemon_component__typesBlock}>
        <h3 className={styles.pokemon_component__typesBlock__titels}>Types</h3>
        <div className={styles.pokemon_component__typesBlock__types}>
          {pokemonType}
        </div>
      </div>
    </div>
  );
};

PokemonItem.defaultProps = {
  id: 1,
  src: '',
  data: {},
  pokemonTitle: '',
};

PokemonItem.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  data: PropTypes.object,
  pokemonTitle: PropTypes.string,
};

export default PokemonItem;
