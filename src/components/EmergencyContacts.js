// src/components/EmergencyContacts.js
import React from 'react';

const EmergencyContacts = () => {
  const contacts = [
    { name: 'Police', number: '100' },
    { name: 'Ambulance', number: '102' },
    { name: 'Women Helpline', number: '1091' },
  ];

  return (
    <div className="emergency-contacts">
      <h2>Emergency Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name}: <a href={`tel:${contact.number}`}>{contact.number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyContacts;
