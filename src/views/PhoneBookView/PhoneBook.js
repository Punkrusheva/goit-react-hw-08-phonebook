import React, { Component } from 'react';
import Layout from '../../components/ContactsLayout/ContactsLayout';
import { connect } from "react-redux";
import ContactList from '../../components/ContactList/ContactList'
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactFilter from '../../components/ContactFilter/ContactFilter';
import "../../stylesheets/animation.css";
import Load from "../../components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { contactsOperations, contactsSelectors } from "../../redux/phoneBook";
import Notification from '../../components/Notification/Notification';

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Layout >
        <ContactForm/>
        <ContactFilter />
        
        <ToastContainer autoClose={2500} />
        {this.props.isLoadingContacts && <Load
                        type="ThreeDots"
                        color="#3f51b5"
                        height={45}
                        width={45}
                        timeout={6000}
        />}
        
        {this.props.error &&
                    <Notification
            message={`ERROR: ${this.props.error.message}.`} />}
        
        <ContactList />
      </Layout>
    );
  };
};

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
})

const mapDispatchToProps = dispatch => ({
fetchContacts: () => dispatch(contactsOperations.fetchContacts())
})

export default connect( mapStateToProps, mapDispatchToProps )(Phonebook);