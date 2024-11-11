import { createSelector } from 'reselect';
import { selectNameFilter } from '../filters/selectors';

export const selectAllContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter)
    );
  }
);

export const selectLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;
