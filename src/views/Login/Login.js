import React, { Component } from 'react';
//import styles from './Login.module.css';
import API from "../../services/movies-api";
import Load from "../../components/Loader/Loader";
import InputForm from "../../components/InputForm/InputForm";

export default class Login extends Component {
   state = {
       reviews: '',
       loading: false,
    };

    async componentDidMount() {
        try {
            this.setState({ loading: true });
            const movieId = this.props.match.params.movieId;
            const response = await API.showReviews(movieId);
            this.setState({ reviews: response.data.results });
              }
        catch (error) {
            this.setState({ error: error })
        }
        finally { this.setState({ loading: false }); }
    };

    render() {
       //const {error} = this.state;
        return (
            <>
                <h1>Login</h1>
                <InputForm/>
                <hr />
                
                {/*{error && <h1>Error, try again later {error.message}</h1>}*/}
                
                {this.state.loading &&
                    <Load
                        type="ThreeDots"
                        color="#3f51b5"
                        height={45}
                        width={45}
                        timeout={6000}
                    />}
            </>
        )
    };
}