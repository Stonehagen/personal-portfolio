import React from 'react';
import '../styles/Contact.css';
import { ReactComponent as GitHub } from '../img/github-original.svg';
import { ReactComponent as LinkedIn } from '../img/linkedin-plain.svg';
import { ReactComponent as Hashnode } from '../img/hashnode.svg';

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact me</h1>
      <p>tobias.steinhagen@me.com</p>
      <ul>
        <li>
          <a href='https://github.com/Stonehagen'>
            <GitHub />
          </a>
        </li>
        <li>
          <a href='https://de.linkedin.com/in/tobias-steinhagen'>
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href='https://stonehagen.hashnode.dev'>
            <Hashnode />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
