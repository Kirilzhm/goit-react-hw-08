import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://672a1d1e976a834dd0222fea.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, { rejectWithValue }) => {
    try {
        const response = await axios.post('/contacts', contact);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, { rejectWithValue }) => {
    try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
