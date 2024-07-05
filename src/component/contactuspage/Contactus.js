import React from 'react';
import './contactus.css';
import Form from '../Client/Form.js/Form';
import contact from '../../image/innerImage/Contact Us.jpg';

function Contactus() {
    return (
        <div className='contactpage'>
            <img src={contact} alt='contact us' className='contactimg' /><br />
            <Form />
            <div style={{ width: '100%', height: '500px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15630.230621558356!2d78.17743953228754!3d11.65483668227577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Kumaragiripet%2C%20South%20Ammapet%2C%20Sanniyasigundu%2C%20Salem%2C%20Salem%2C%20Tamil%20Nadu%2C%20IndiaUttar%20Pradesh-201305!5e0!3m2!1sen!2sin!4v1718627717188!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
}

export default Contactus;
