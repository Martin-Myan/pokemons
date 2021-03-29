import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Link } from 'components';

import styles from './PokemonItem.scss';

const PokemonItem = ({ id, types_two, types_one, pokemonTitle }) => {
  const [pokemonPosition, setPokemonPosition] = useState(false);

  const leftClick = () => {
    setPokemonPosition(true);
  };

  const rightClick = () => {
    setPokemonPosition(false);
  };

  const pokemonPageFromId = `/pokemon/${[id]}`;

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
        <Button
          className={styles.pokemon_component__btnBlock__left}
          onClick={leftClick}
        >
          With the back
        </Button>
        <Button
          className={styles.pokemon_component__btnBlock__right}
          onClick={rightClick}
        >
          Face
        </Button>
        <p>{types_one}</p>
        <span>{types_two}</span>
      </div>
    </div>
  );
};

PokemonItem.defaultProps = {
  id: 1,
  src: '',
  types_two: '',
  types_one: '',
  pokemonTitle: '',
};

PokemonItem.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  types_two: PropTypes.string,
  types_one: PropTypes.string,
  pokemonTitle: PropTypes.string,
};

export default PokemonItem;
