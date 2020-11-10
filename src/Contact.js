import React from 'react';
import { Card } from 'reactstrap';
import ContactForm from './ContactForm.js';
import SocialMobile from './SocialMobile.js';
import { env } from './config';
import './styles/Contact.css';

function Contact() {

  return (
    <div>
        <Card id="message-container">
            <ContactForm env={env} />
        </Card>
        <SocialMobile /> 
    </div>   
  );
}
  
export default Contact;