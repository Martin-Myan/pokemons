import axios from 'axios';

import { axiosInstance } from 'libraries/index';

import {
  GET_PER_PAGE,
  //
  GET_TYPES,
  GET_TYPES_ERROR,
  GET_TYPES_STARTED,
  //
  GET_POKEMONS,
  GET_POKEMONS_ERROR,
  GET_POKEMONS_STARTED,
  //
  FILTER_POKEMON,
  FILTER_POKEMON_ERROR,
  FILTER_POKEMON_STARTED,
} from '../reducers/pokemonReducer';

export const getPokemonStarted = () => ({ type: GET_POKEMONS_STARTED });
export const getPokemonError = (err) => ({
  type: GET_POKEMONS_ERROR,
  payload: err,
});
export const getPokemonFinished = (data) => ({
  type: GET_POKEMONS,
  payload: data,
});

export const getTypeStarted = () => ({ type: GET_TYPES_STARTED });
export const getTypeError = (err) => ({
  type: GET_TYPES_ERROR,
  payload: err,
});
export const getType = (data) => ({
  type: GET_TYPES,
  payload: data,
});

export const getPokemonTypes = () => async (dispatch) => {
  try {
    dispatch(getTypeStarted());
    const {
      data: { results },
    } = await axiosInstance.get('/type');
    dispatch(getType(results));
  } catch (err) {
    dispatch(getTypeError(err));
  }
};

export const getPokemonList = (perPage) => async (dispatch) => {
  try {
    dispatch(getPokemonStarted());
    const {
      data: { results },
    } = await axiosInstance.get(`pokemon/?limit=${perPage}&offset=0`);

    const getPokemonsList = results.map(async (item) => {
      const { data } = await axios.get(item.url);
      return data;
    });

    const parsedPokemonData = await Promise.all(getPokemonsList);

    await dispatch(getPokemonFinished(parsedPokemonData));
  } catch (err) {
    dispatch(getPokemonError(err));
  }
};

export const perPageHandlerAction = (per) => ({
  type: GET_PER_PAGE,
  payload: per,
});

export const filterPokemonError = (err) => ({
  type: FILTER_POKEMON_ERROR,
  payload: err,
});
export const filterPokemonStarted = () => ({
  type: FILTER_POKEMON_STARTED,
});
export const filterPokemon = () => ({
  type: FILTER_POKEMON,
  // payload: err,
});
