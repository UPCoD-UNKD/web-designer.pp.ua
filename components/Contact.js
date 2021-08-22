import React from 'react'
import Form from './Form'

function Contact() {
  return (
    <section id="contact_block">
      <div className="container text-center">
        <h3 className="section-title">Get in touch</h3>
      </div>
      <div className="container text-center">
        <Form />
      </div> 
    </section>
  );
}

export default Contact