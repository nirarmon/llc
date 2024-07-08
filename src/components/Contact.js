import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>Email: contact@whitelabelsolutions.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Office Address: 123 Business St, Suite 100, Business City, BC 12345</p>
    </section>
  );
};

export default Contact;
