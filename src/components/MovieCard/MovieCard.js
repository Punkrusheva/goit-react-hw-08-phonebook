import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

function MovieCard({ movie}) {
    return (
    <>
        <img className={styles.img} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}?api_key=892c9b9f1c704261a0f515abd746d990`} alt={movie.title}/>
                <div className={styles.details}>
                    <h1 className={styles.title}>{movie.title} ({movie.release_date.slice(0, 4)})</h1>
                    <div className={styles.score}>User Score: {movie.vote_average * 10}%</div>
                    <div className={styles.overview}>Overview</div><p>{movie.overview}</p>
                    <div className={styles.genres}>Genres</div><p>{movie.genres.map((genre) => (genre.name + " "))}</p>
                </div>
        </>
  )
}

MovieCard.defaultProps = {
  img: '',
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    }),
};

export default MovieCard;