import { createSelector } from 'reselect';

export const selectState = (state) => state;

export const selectPokemonList = createSelector(
  selectState,
  (pokemonState) => pokemonState.pokemon.pokemonList,
);

export const selectPerPage = createSelector(
  selectState,
  (pokemonState) => pokemonState.perPage,
);

export const selectType = createSelector(
  selectState,
  (pokemonState) => pokemonState.pokemon.pokemonTypes,
);
