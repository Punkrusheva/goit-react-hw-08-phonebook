import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations }  from '../../redux/auth';
import Load from "../../components/Loader/Loader";
import styles from "./Login.module.css";
import { authSelectors } from "../../redux/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthNotification from '../../components/AuthNotification/AuthNotification';

class Login extends Component {
    state = {
    email: '',
    password: '',
    };

    handleChange = ({ target: { name, value } }) => {
       this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        if (email === '') { toast.error('Email is empty'); }
        else {
            if (password.length < 7) { toast.error('Wrong password'); }
            else {
                this.props.onLogin(this.state);

                this.setState({ name: '', email: '', password: '' });
            };
        };
    };

    render() {
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
                {this.props.isLoadingAuth &&
                        <Load
                            type="ThreeDots"
                            color="#3f51b5"
                            height={45}
                            width={45}
                            timeout={6000}
                    />}
                {this.props.errorLog && <AuthNotification/>}
            </>
        )
    };
};

const mapStateToProps = state => ({
    isLoadingAuth: authSelectors.getAuthLoading(state),
    errorLog: authSelectors.getAuthError(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);