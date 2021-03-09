import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';
import MovieListItem from '../MovieListItem/MovieListItem';

function MovieList({ movies, state} ) {
    return (
        <>
            <ul className={styles.moviesList}>
            {movies.map((movie) => (<MovieListItem key={movie.id} movie={movie} state={state}></MovieListItem>))}
            </ul>
        </>
    )
}
        
MovieList.defaultProps = {
  movies: [],
  children: "",
};

MovieList.propTypes = {
  movies: PropTypes.array,
  children: PropTypes.node,
};

export default MovieList;