import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: initialContacts,
    filter: "",
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    loadContactsFromStorage: (state) => {
      const storedContacts = localStorage.getItem("contacts");
      if (storedContacts) {
        state.items = JSON.parse(storedContacts);
      }
    },
  },
});

export const { addContact, deleteContact, setFilter, loadContactsFromStorage } =
  contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.contacts.filter;

export const contactsReducer = contactsSlice.reducer;
