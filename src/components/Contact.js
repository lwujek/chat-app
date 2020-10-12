
import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <div className="Contact">
    <img className="avatar" src="https://randomuser.me/api/portraits/men/76.jpg"/>
    <div className ="status">
    <h2 className="name">Greg Anderson</h2>
    <div className ="status-online" >
    <p className ="status-text">Online</p>
    </div>
    </div>
    </div>
  );
}

export default Contact;

