import React from 'react';

import { Button, Link } from 'components/index';
import { paths } from 'routes/index';

import styles from './Error.scss';

const ErrorContainer = () => (
  <div className={styles.container}>
    <h1>404</h1>
    <Button>
      <Link to={paths.home}>Главная страница</Link>
    </Button>
  </div>
);

export default ErrorContainer;
