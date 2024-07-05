import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Notification from './Notification';
import form from '../../../image/5.jpg';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    Message: ''
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
    }
    if (!formData.phone) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.industry) tempErrors.industry = 'Industry is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log('Sending formData:', formData); // Log formData
        const response = await emailjs.send('service_rkvivfh', 'template_0xjo79r', formData, 'pi7HGACaR03yvY8LG');
        console.log('EmailJS response:', response); // Log EmailJS response
        setNotification({ message: 'Your application is submitted', type: 'success' });
        setFormData({ name: '', email: '', phone: '', industry: '' });
      } catch (error) {
        console.error('Failed to send email:', error); // Log the detailed error
        setNotification({ message: 'There was an error submitting your application', type: 'error' });
      }
    } else {
      setNotification({ message: 'Please fix the validation errors', type: 'error' });
    }
  };

  const handleCloseNotification = () => {
    setNotification({ message: '', type: '' });
  };

  return (
    <div>
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={handleCloseNotification}
      />
      <div className="flex flex-col md:flex-row shadow-lg border w-full md:w-2/3 mx-auto  my-10" style={{ marginTop: '-130px', position: 'relative', background: 'white' }}>
        <div className="w-full md:w-1/2">
          <img src={form} alt="Form" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 p-2 border w-full rounded"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 p-2 border w-full rounded"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="mt-1 p-2 border w-full rounded"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="industry"
                className="mt-1 p-2 border w-full rounded"
                value={formData.industry}
                onChange={handleChange}
                placeholder="Enter Industry"
              />
              {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;


