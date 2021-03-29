import { HYDRATE } from 'next-redux-wrapper';

import { createActionName } from 'utils/index';

export const GET_PER_PAGE = createActionName('pokemon', 'GET_PER_PAGE');
export const GET_POKEMONS = createActionName('pokemon', 'get_pokemons');
export const GET_POKEMONS_STARTED = createActionName(
  'pokemon',
  'get_pokemons_started',
);
export const GET_POKEMONS_ERROR = createActionName(
  'pokemon',
  'get_pokemons_error',
);

export const GET_TYPES = createActionName('pokemon', 'get_types');
export const GET_TYPES_STARTED = createActionName(
  'get_types_started',
  'pokemon',
);
export const GET_TYPES_ERROR = createActionName('pokemon', 'get_types_error');

export const POKEMON_URL_API = 'POKEMON_URL_API';

const initialState = {
  perPage: 10,
  pokemonList: [],
  pokemonTypes: [],
};

const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.pokemon };
    case GET_POKEMONS:
      return { ...state, pokemonList: payload };
    case GET_TYPES:
      return { ...state, pokemonTypes: payload };
    case GET_PER_PAGE:
      return { ...state, perPage: payload };
    default: {
      return state;
    }
  }
};

export default pokemonReducer;
