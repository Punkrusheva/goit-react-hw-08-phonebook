import React, { Component, Suspense, lazy } from 'react';
import { Route, NavLink } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io';
import routes from "../../routes";
import styles from './MovieDetailsPage.module.css';
import API from "../../services/movies-api";
import Load from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";

const Cast = lazy(() => import('../Register/Register.js' /*webpackChunkName: 'cast' */));
const Reviews = lazy(() => import('../Login/Login.js' /*webpackChunkName: 'reviews' */));

export default class MovieDetailsPage extends Component {
    state = {
        movieId: '',
        movie: [],
        error: null,
        loading: false,
    };
    
    async componentDidMount() {
        try {
            this.setState({ loading: true });
            const movieId = this.props.match.params.movieId;
            const response = await API.showMovieDetails(movieId);
            this.setState({ movie: response.data });
        }
        catch (error) {
            this.setState({ error: error })
        }
        finally {this.setState({ loading: false })}
    };

    handleGoBack = () => {
        const { location, history } = this.props;
                
        history.push(location?.state?.from || routes.home);
  };
    
    render() {
        const { movie, error } = this.state;
        return (
            <>                
                {error && <h1>Error, try again later</h1>}
                {this.state.loading &&
                    <Load
                        type="ThreeDots"
                        color="#3f51b5"
                        height={45}
                        width={45}
                        timeout={6000}
                    />}
                <button className={styles.linkBack} onClick={this.handleGoBack} ><IoIosArrowRoundBack/>Go back</button>
                <br />
                {movie.title && (<>
                    <MovieCard movie={movie}></MovieCard>
                                    
                <hr />
                <h2>Additional information</h2>
                <ul className={styles.detailsMenu}>
                    <li className={styles.detailsMenuItem}>
                            <NavLink exact to={{ pathname: `${this.props.match.url}/cast`, state: { from: this.props.location.state?.from }}}
                            className={styles.detailsLink}
                            activeClassName={styles.detailsLinkActive}>Cast</NavLink>
                    </li>
                    <li className={styles.detailsMenuItem}>
                            <NavLink to={{ pathname: `${this.props.match.url}/reviews`, state: { from: this.props.location.state?.from }}}
                            className={styles.detailsLink}
                            activeClassName={styles.detailsLinkActive}>Reviews</NavLink>
                    </li>
                    </ul>
                    <Suspense fallback={this.state.loading &&
                    <Load
                        type="ThreeDots"
                        color="#3f51b5"
                        height={45}
                        width={45}
                        timeout={6000}
                    />}>
                        <Route path={routes.cast} component={Cast} />
                        <Route path={routes.reviews} component={Reviews} />
                    </Suspense>
                </>
                )}           
            </>
        )
    };
}

/*<ul className={styles.moviesList}>
                    {movies.map((movie) => (<li key={movie.id} className={styles.item}>
                        <Link to={{ pathname: `movies/${movie.id}`, state: { from: this.props.location } }}>
                        {movie.title}</Link></li>))}
                        </ul>*/