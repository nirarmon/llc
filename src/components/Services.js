import React from 'react';
import './Section.css';

const Services = () => {
  return (
    <section className="section">
      <h2>Our Services</h2>
      <img src="/services-image.jpg" alt="Our Services" />
      <h3>US Services</h3>
      <p>LLCs, S-Corps, C-Corps registration</p>
      <h3>HK Services</h3>
      <p>Company incorporation, accounting, secretarial services</p>
      <h3>Process Transparency</h3>
      <p>We keep you informed about the process every step of the way.</p>
    </section>
  );
};

export default Services;
