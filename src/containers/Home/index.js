import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { pokemonSelectors } from 'store/selectors';
import { Header, PokemonItem, Pagination } from 'components';

import styles from './Home.scss';

const HomeContainer = () => {
  const selectPokemons = useSelector(pokemonSelectors.selectPokemonList);

  const renderItems = selectPokemons.map((item) => (
    <PokemonItem
      id={item.id}
      key={shortid.generate()}
      pokemonTitle={item.name}
      url={item.base_experience}
      // types_two={item.} types_one={item.}
    />
  ));

  // console.log(
  //   selectPokemons.map((item) => {
  //     console.log(item.types, 'renderItemsrenderItemsrenderItemsrenderItems');
  //   }),
  // );

  return (
    <section className={styles.localPage}>
      <Header />
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
