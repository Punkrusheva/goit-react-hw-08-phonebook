import axios from "axios";
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from "./phoneBook-actions";

//axios.defaults.baseURL = 'http://localhost:4040';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest());
    
    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error));
    }
};

const addContact = ({ name, number }) => async dispatch => {
    dispatch(addContactRequest());

    try {
        const contact = {name, number};
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }
};

const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest());

    try {
       await axios.delete(`/contacts/${contactId}`);
        dispatch(deleteContactSuccess(contactId))
    }  catch (error) {
        dispatch(deleteContactError(error));
    }
};

export default { fetchContacts, addContact, deleteContact};