import React, { Component } from 'react';
import { connect } from "react-redux";
import { contactsOperations } from "../../redux/phoneBook/index";
import shortid from 'shortid';
import styles from './InputForm.module.css';
import { CSSTransition } from "react-transition-group";
import "../../stylesheets/animation.css";
import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };
 
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;

    if (name === '') {toast.error('Contact details empty');
    } else { 
      if (this.props.contacts.items.find(({ name }) => name === this.state.name)) {
        toast.error('Contact is already exist');
      } else {
        this.props.onSubmit(this.state);
      };
      this.reset();
    };
  };
    
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
      <form className={styles.box} onSubmit={this.handleSubmit} >
        <label htmlFor={this.nameInputId} className={styles.name}>
          Login
          <input
            type='text'
            name='name'
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            className={styles.input}
            placeholder='Enter login' />
        </label>
        <label htmlFor={this.numberInputId} className={styles.number}>
          E-mail
          <input
            type='text'
            name='number'
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
            className={styles.input}
            placeholder='Enter e-mail' />
          </label>
            <button type='submit' className={styles.button}>
              Submit
            </button>
        </form>
        </>
    );
  }
};

const mapStateToProps = state => ({ contacts: state.contacts });

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => { dispatch(contactsOperations.addContact(name, number)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);