import React from 'react';
import PropTypes from 'prop-types';

import styles from './Searche.scss';

import { ReactComponent as Zoom } from '../../icons/magnifier.svg';

const Search = ({ onChange }) => {
  return (
    <div className={styles.searchComponent}>
      <Zoom className={styles.searchComponent__icon} />
      <input
        type="text"
        onChange={onChange}
        placeholder="Searche Pokemon"
        className={styles.searchComponent__searche}
      />
    </div>
  );
};

Search.defaultProps = {
  onChange: () => {},
};

Search.propTypes = {
  onChange: PropTypes.func,
};

export default Search;
