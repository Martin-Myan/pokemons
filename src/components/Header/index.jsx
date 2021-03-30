import React from 'react';
import PropTypes from 'prop-types';

import { PokemonTypes, Per, Searche } from 'components';

import styles from './Header.scss';

const Header = ({ value, onChange, pokemonTypeCount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <PokemonTypes pokemonTypeCount={pokemonTypeCount} />
        <Searche value={value} onChange={onChange} />
        <Per />
      </div>
    </header>
  );
};

Header.defaultProps = {
  value: '',
  onChange: () => {},
  pokemonTypeCount: [],
};

Header.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  pokemonTypeCount: PropTypes.array,
};

export default Header;
