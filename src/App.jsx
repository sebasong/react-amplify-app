import React, { useState, useEffect } from 'react';
import './App.css';
import CollapsibleButton from './collapsible.jsx' ;
import logoImg from "./logo.png";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
     
    </div>
  );
}



export default Contacts;
