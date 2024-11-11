export const selectLoading = (state) => state.contacts.isLoading;

export const selectAllContacts = (state) => state.contacts.items;

export const selectError = (state) => state.contacts.error;
