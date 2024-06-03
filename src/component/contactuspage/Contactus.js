import React from 'react'
import './contactus.css';
import Form from '../Client/Form.js/Form';
// import Client from '../Client/Client';
import contact from '../../image/innerImage/Contact Us.jpg'
function Contactus() {
    return (
        <div className='contactpage'>

      
       
            
         
            <img src={contact} alt='contact us ' className='contactimg'/><br/>
            <Form />
            <iframe title="Map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1995573.8796492987!2d77.89351567500003!3d12.342336184919278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1717131997897!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="eager"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
        
    )
}

export default Contactus
