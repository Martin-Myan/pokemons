import React from 'react';
// import ReactPaginate from 'react-paginate';

import styles from './Pagination.scss';

// import { ReactComponent as Right } from '../../icons/right.svg';
// import { ReactComponent as Left } from '../../icons/left.svg';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      {/* <Right type="button" className={styles.pagination__leftIcon} />
      <Left type="button" className={styles.pagination__rightIcon} /> */}
    </div>
  );
};

export default Pagination;
