import React from 'react';
import PropTypes from 'prop-types';

import { PokemonTypes, Per, Searche } from 'components';

import styles from './Header.scss';

const Header = ({ options }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <PokemonTypes options={options} />
        <Searche />
        <Per />
      </div>
    </header>
  );
};

Header.defaultProps = {
  options: [],
};

Header.propTypes = {
  options: PropTypes.any,
};

export default Header;
