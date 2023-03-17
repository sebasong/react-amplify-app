import React, { useState } from 'react';
import './App.css';
import classNames from 'classnames';

function CollapsibleButton({ title, className, contact }) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonClass = classNames('collapsible', className, {
    'active': isOpen
  });
  const contentClass = classNames('Content', className, { 'active': isOpen });

  return (
    <div className="CollapsibleButton">
      <button
        className={buttonClass}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div className={`CustomButton ${contentClass}`}>
        {isOpen && (
          <>
            <p>👤 Username: {contact.username}</p>
            <p>✉️ Email: {contact.email}</p>
            <p>☎️ Phone: {contact.phone}</p>
            <p>🌐 Website: {contact.website}</p>
            <p>🏢 Company Name: {contact.company.name}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default CollapsibleButton;