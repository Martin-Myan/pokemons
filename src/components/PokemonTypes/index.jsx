import React from 'react';
import PropTypes from 'prop-types';

import styles from './PokemonTypes.scss';

const PokemonTypes = ({ pokemonTypeCount }) => {
  return (
    <select className={styles.pokemon_types}>
      <option>All Types</option>
      {pokemonTypeCount}
    </select>
  );
};

PokemonTypes.defaultProps = {
  pokemonTypeCount: [],
};

PokemonTypes.propTypes = {
  pokemonTypeCount: PropTypes.array,
};

export default PokemonTypes;
