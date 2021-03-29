import React from 'react';
import PropTypes from 'prop-types';

import { PokemonTypes, Per, Searche } from 'components';

import styles from './Header.scss';

const Header = ({ onChange }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <PokemonTypes />
        <Searche onChange={onChange} />
        <Per />
      </div>
    </header>
  );
};

Header.defaultProps = {
  onChange: () => {},
};

Header.propTypes = {
  onChange: PropTypes.func,
};

export default Header;
