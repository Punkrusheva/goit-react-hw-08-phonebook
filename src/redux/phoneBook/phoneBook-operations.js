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

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest());
    
    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error.massage));
    }
};

const addContact = ({ name, number }) => async dispatch => {
    dispatch(addContactRequest());

    try {
        const contact = {name, number};
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error.massage));
    }
};

const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest());

    try {
       await axios.delete(`/contacts/${contactId}`);
        dispatch(deleteContactSuccess(contactId))
    }  catch (error) {
        dispatch(deleteContactError(error.massage));
    }
};

export default { fetchContacts, addContact, deleteContact};