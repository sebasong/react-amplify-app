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
      <div className="Logo">
        <img src={logoImg} alt="logo" className="logo" />
        <h1>Resonate Contacts</h1>
      </div>
      
      <div class="topnav">
      <a class="active" href="#home">Home</a>
    </div>
    
    <div className='searchContainer'>
      <input
         type="text"
         value={search}
          onChange={e => setSearch(e.target.value)}
         placeholder="Search contacts"
       />
        <button className="add-contact-button">+ Add New Contact</button>
    </div>
      
      <div>
        {filteredContacts.map(contact => (
          <CollapsibleButton key={contact.id} title={contact.name} className = "CustomButton" contact = {contact}>
        </CollapsibleButton>
      ))}
      </div>
    </div>
  );
}



export default Contacts;
