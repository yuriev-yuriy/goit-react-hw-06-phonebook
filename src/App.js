import { useState, useEffect } from 'react';
import React from 'react';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/ContactList';
import s from './App.module.css';

export default function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={s.App}>
      <div className={s.Wrapper}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
