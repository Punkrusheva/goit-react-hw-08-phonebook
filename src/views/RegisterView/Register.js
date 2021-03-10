import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations }  from '../../redux/auth';
//import Load from "../../components/Loader/Loader";
import styles from "./Register.module.css";

class Register extends Component {
  /* state = {
       loading: false,
       error: null,
    };*/
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

   this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

    render() {
        //const { error } = this.state;
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
                
                {/* {error && <h1>Error, try again later {error.message}</h1>}*/}
            </>
        )
    };
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
/**
                {this.state.loading &&
                    <Load
                        type="ThreeDots"
                        color="#3f51b5"
                        height={45}
                        width={45}
                        timeout={6000}
                    />} */