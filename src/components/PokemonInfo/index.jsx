import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { Link } from 'components';
import { pokemonSelectors } from 'store/selectors';

import styles from './PokemonInfo.scss';

const PokemonInfo = () => {
  const [pokemonImagePosition, setPokemonImagePosition] = useState(false);

  const router = useRouter();

  const selectPokemons = useSelector(pokemonSelectors.selectPokemonList);
  const activePokemon = selectPokemons[+router.query.id - 1];
  const pokemonPosition = () => {
    setPokemonImagePosition(!pokemonImagePosition);
  };

  const srcURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    !pokemonImagePosition ? router.query.id : `back/${router.query.id}`
  }.png`;

  return (
    <section className={`${styles.pokemonInfo} container`}>
      <Link to="/" className={styles.pokemonInfo__back}>
        Back
      </Link>
      <div key={activePokemon.id} className={styles.pokemonInfo__infoComponent}>
        <div className={styles.pokemonInfo__infoComponent__imageBlock}>
          <img
            src={srcURL}
            alt="Pokemon_photo"
            className={styles.pokemonInfo__infoComponent__imageBlock__image}
          />
          <p
            className={
              styles.pokemonInfo__infoComponent__imageBlock__elementLength
            }
          >
            {router.query.id} th Pokemon
          </p>
          <div
            className={
              styles.pokemonInfo__infoComponent__imageBlock__positionBlock
            }
          >
            <button
              onClick={pokemonPosition}
              className={
                styles.pokemonInfo__infoComponent__imageBlock__positionBlock__left
              }
              type="button"
            >
              {`${'<'}`}
            </button>
            <button
              onClick={pokemonPosition}
              className={
                styles.pokemonInfo__infoComponent__imageBlock__positionBlock__right
              }
              type="button"
            >
              {`${'>'}`}
            </button>
          </div>
        </div>
        <div className={styles.pokemonInfo__infoComponent__other}>
          <h2 className={styles.pokemonInfo__infoComponent__other__name}>
            Pokemon Name:
            <span
              className={styles.pokemonInfo__infoComponent__other__name__title}
            >
              {activePokemon.name}
            </span>
          </h2>
          <div className={styles.pokemonInfo__infoComponent__other__skills}>
            <p
              className={styles.pokemonInfo__infoComponent__other__skills__name}
            >
              Base experience:
              <span
                className={
                  styles.pokemonInfo__infoComponent__other__skills__name__value
                }
              >
                {activePokemon.base_experience}
              </span>
            </p>
            <p
              className={styles.pokemonInfo__infoComponent__other__skills__name}
            >
              Demand:
              <span
                className={
                  styles.pokemonInfo__infoComponent__other__skills__name__value
                }
              >
                {activePokemon.order}
              </span>
            </p>
            <p
              className={styles.pokemonInfo__infoComponent__other__skills__name}
            >
              Weight:
              <span
                className={
                  styles.pokemonInfo__infoComponent__other__skills__name__value
                }
              >
                {activePokemon.weight}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

PokemonInfo.defaultProps = {
  src: '',
  order: '',
  weight: '',
  pokemonTitel: '',
  base_experience: '',
};

PokemonInfo.propTypes = {
  src: PropTypes.string,
  order: PropTypes.string,
  weight: PropTypes.string,
  pokemonTitel: PropTypes.string,
  base_experience: PropTypes.string,
};
export default PokemonInfo;
