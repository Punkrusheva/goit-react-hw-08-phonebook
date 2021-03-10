import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations }  from '../../redux/auth';
//import Load from "../../components/Loader/Loader";
import styles from "./Login.module.css";

class Login extends Component {
 /*  state = {
       loading: false,
       error: null,
    };*/
    state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

    render() {
       //const {error} = this.state;
        return (
            <>
            <h1>Login</h1>
            
                <form className={styles.box} onSubmit={this.handleSubmit} >
                    <label htmlFor={this.emailInputId} className={styles.email}>
                        E-mail
                        <input
                            type='email'
                            name='email'
                            id={this.emailInputId}
                            value={this.state.email}
                            onChange={this.handleChange}
                            className={styles.input}
                            placeholder='Enter e-mail'
                        />
                    </label>
                    <label htmlFor={this.passwordInputId} className={styles.password}>
                        Password
                        <input
                            type='password'
                            name='password'
                            id={this.passwordInputId}
                            value={this.state.password}
                            onChange={this.handleChange}
                            className={styles.input}
                            placeholder='Enter password'
                        />
                    </label>
                    <button type='submit' className={styles.button}>
                        Sign in
                    </button>
                </form>
                
                {/*{error && <h1>Error, try again later {error.message}</h1>}*/}
                
            </>
        )
    };
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(Login);
/** {this.state.loading &&
                    <Load
                        type="ThreeDots"
                        color="#3f51b5"
                        height={45}
                        width={45}
                        timeout={6000}
                    />} */