import React, { Component } from 'react';
import styles from './SearchBox.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class SearchBox extends Component {
  state = { value: '' };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value === '') {
      toast.error('Empty request');
      return
    } 
      this.props.onSubmit(this.state.value);
      this.setState({ value: '' });
  };

  render() {
    return (
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
            <input
                type='text'
                name='search'
                autoComplete="off"
                autoFocus
                onChange={this.handleChange}
                value={this.state.value}
                className={styles.input}
                placeholder='Search movies'
                    />
                    <button type="submit" className={styles.button}>
                    <span className={styles.label}
                        aria-label='Search'>Search
                    </span>
        </button>
            </form>
    );
  }
}