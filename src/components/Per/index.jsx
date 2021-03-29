import React from 'react';
import { useDispatch } from 'react-redux';

import { pokemonActions } from 'store/actions';

import styles from './Per.scss';

const Per = () => {
  const dispatch = useDispatch();

  const optionHandler = (e) => {
    dispatch(pokemonActions.perPageHandlerAction(e.target.value));
    dispatch(pokemonActions.getPokemonList(e.target.value));
  };

  return (
    <select onChange={(e) => optionHandler(e)} className={styles.per}>
      <option value="10">Per 10</option>
      <option value="40">Per 40</option>
      <option value="70">Per 70</option>
      <option value="1017">ALL</option>
    </select>
  );
};

export default Per;
