import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import Select from 'react-select';

import shortid from 'shortid';

import { Header, PokemonItem, Pagination } from 'components';
import { pokemonSelectors } from 'store/selectors';

import styles from './Home.scss';

const HomeContainer = () => {
  const [change, setChange] = useState('');
  const selectPokemons = useSelector(pokemonSelectors.selectPokemonList);

  const filterItems = selectPokemons.filter((item) => {
    return item.name.toLowerCase().includes(change.toLowerCase());
  });

  const isSearch = change ? filterItems : selectPokemons;

  const renderItems = isSearch.map((item) => (
    <PokemonItem
      data={item}
      id={item.id}
      key={shortid.generate()}
      pokemonTitle={item.name}
      url={item.base_experience}
    />
  ));

  const types = useSelector(pokemonSelectors.selectType);

  // const filterItemsFromType = selectPokemons.filter((item) => {
  //   return item.name.toLowerCase().includes(change.toLowerCase());
  // });

  const pokemonTypeCount = types.map((item) => (
    <option
      value={item.name}
      key={shortid.generate()}
      className={styles.pokemon_types__options}
    >
      {item.name}
    </option>
  ));

  console.log(pokemonTypeCount, 'pokemonTypeCountpokemonTypeCount');

  return (
    <section className={styles.localPage}>
      <Header
        value={change}
        onChange={(e) => {
          setChange(e.target.value.trim());
        }}
        pokemonTypeCount={pokemonTypeCount}
      />
      <div className={styles.localPage__header_skelleton} />
      <Pagination />
      <div className={styles.localPage__pokemonItems}>{renderItems}</div>
    </section>
  );
};

HomeContainer.defaultProps = {
  data: {},
};

HomeContainer.propTypes = {
  data: PropTypes.object,
};

export default HomeContainer;
