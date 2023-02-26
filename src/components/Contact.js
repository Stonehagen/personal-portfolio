import React from 'react';
import '../styles/Contact.css';
import { ReactComponent as GitHub } from '../img/github-original.svg';
import { ReactComponent as LinkedIn } from '../img/linkedin-plain.svg';

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact me</h1>
      <p>Please get in touch with me.</p>
      <p>email.Placeholder@okat.com</p>
      <ul>
        <li>
          <a href='https://github.com/Stonehagen'>
            <GitHub />
          </a>
        </li>
        <li>
          <a href='https://de.linkedin.com/in/tobias-steinhagen-ab3538107'>
            <LinkedIn />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
