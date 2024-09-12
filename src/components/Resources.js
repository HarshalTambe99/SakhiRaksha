// src/components/Resources.js
// src/components/Resources.js
import React from 'react';

const Resources = () => {
  const resources = [
    { title: 'Self-Defense Tips and Techniques', link: 'https://www.wikihow.com/Defend-Yourself' },
    { title: 'Legal Aid for Women', link: 'https://www.legalservicesindia.com/' },
    { title: 'Counseling Services', link: 'https://www.betterhelp.com/' },
    { title: 'Women Helpline Numbers', link: 'https://www.india.gov.in/women-helpline-numbers' },
    { title: 'Online Safety and Cybersecurity', link: 'https://staysafeonline.org/' }
  ];

  return (
    <div className="resources">
      <h2>Resources</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
