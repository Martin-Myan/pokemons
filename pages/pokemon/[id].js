import React from 'react';

import { PokemonInfo } from 'components';
import { pokemonActions } from 'store/actions';

const PokemonInfoPage = () => {
  return <PokemonInfo />;
};

PokemonInfoPage.getInitialProps = async (ctx) => {
  const { dispatch } = ctx.store;

  // const { data } = await axios.get(
  //   'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0',
  // );

  await dispatch(pokemonActions.getPokemonList());
  return {};
};

export default PokemonInfoPage;
