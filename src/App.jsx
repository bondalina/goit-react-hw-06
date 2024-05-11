import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  addContact,
  deleteContact,
  setFilter,
  loadContactsFromStorage,
} from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(loadContactsFromStorage());
  }, [dispatch]);

  const handleSearch = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox onSearch={handleSearch} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
