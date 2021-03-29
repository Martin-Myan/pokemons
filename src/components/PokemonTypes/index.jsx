import React from 'react';
import shortid from 'shortid';
import { useSelector } from 'react-redux';

import { pokemonSelectors } from 'store/selectors';

import styles from './PokemonTypes.scss';

const PokemonTypes = () => {
  const types = useSelector(pokemonSelectors.selectType);

  // console.log(
  //   types.map((item) => item.name),
  //   'typestypestypes',
  // );

  const pokemonTypeCount = types.map((item) => (
    <option
      value={item.name}
      key={shortid.generate()}
      className={styles.pokemon_types__options}
    >
      {item.name}
    </option>
  ));

  return (
    <select className={styles.pokemon_types}>
      <option>All Types</option>
      {pokemonTypeCount}
    </select>
  );
};

export default PokemonTypes;
