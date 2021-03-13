import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations }  from '../../redux/auth';
import Load from "../../components/Loader/Loader";
import styles from "./Register.module.css";
import { authSelectors } from "../../redux/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component {
    state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

    handleSubmit = e => {
        e.preventDefault();
        const { name, email, password } = this.state;
        if (name === '') {
            toast.error('Name is empty');
        } else {
            if (email === '') { toast.error('Email is empty'); }
            else {
                if (password.length < 7) { toast.error('Wrong password'); }
                else {
                        this.props.onRegister(this.state);
                        this.setState({ name: '', email: '', password: '' });
                    };
                };
            };
        };
    
    render() {
        console.log(this.props.isErrorAuth);
            return (
                <>
                    <h1>Registration</h1>
                    <form className={styles.box} onSubmit={this.handleSubmit} autoComplete='off' >
                        <label htmlFor={this.nameInputId} className={styles.name}>
                            Name
                        <input
                                type='text'
                                name='name'
                                id={this.nameInputId}
                                value={this.state.name}
                                onChange={this.handleChange}
                                className={styles.input}
                                placeholder='Enter name'
                            />
                        </label>
                        <label htmlFor={this.emailInputId} className={styles.email}>
                            E-mail
                        <input
                                type='text'
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
                            Register
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
                    {this.props.isErrorAuth && alert(`${this.props.isErrorAuth}`)}
                </>
            )
        };
    };

const mapStateToProps = state => ({
    isLoadingAuth: authSelectors.getAuthLoading(state),
    isErrorAuth: authSelectors.getAuthError(state),
});

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);