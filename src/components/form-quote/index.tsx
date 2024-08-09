import React, { useState } from 'react'
import './styles.css'

import { AiFillCheckCircle } from 'react-icons/ai'

export default function FormQuote () {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        message: '',
        selectedService: '',
    });

    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
        try {
          const response = await fetch('https://us-central1-kairoswebsite-21c64.cloudfunctions.net/sendMail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            mode: 'no-cors',
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setIsSuccess(true);
          } else {
            alert('Something went wrong. Please try again.');
          }
        } catch (error) {
          console.error(error);
          alert('Something went wrong. Please try again later.');
        }
      };

    return(
        <div className='my-form' id='quote-form'>
            <h1>Get a quote now. It's easy.</h1>
            {isSuccess ? (
                <div className='success-message'>
                    <p>Great! <br/>We will get back to you soon!</p>
                    <AiFillCheckCircle className='check-icon'/><br/><br/>
                    <button onClick={() => setIsSuccess(false)}>REQUEST ANOTHER QUOTE?</button>
                </div>
            ) : (
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input 
                    type='text'
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder='First Name'
                    required
                    />
                    <input 
                    type='text'
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder='Last Name'
                    required
                    />
                    <input 
                    type='tel'
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='Phone Number'
                    required
                    />
                    <select 
                    name='selectedService'
                    value={formData.selectedService}
                    onChange={handleChange}
                    required
                    >
                        <option value="">What Service Do You Need?</option>
                        <option value="Flooring">Flooring</option>
                        <option value="Painting">Painting</option>
                        <option value="Drywall">Drywall</option>
                        <option value="Gutter Cleaning">Gutter Guard</option>
                        <option value="Gutter Cleaning">Gutter Cleaning</option>
                        <option value="Pressure Washing">Pressure Washing</option>
                    </select>
                    <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Describe the service you need'
                    required
                    />
                    <div className='button-quote'>
                      <button type='submit'>Get My Quote</button>
                    </div>
                </div>
            </form>
            )}
        </div>
    )
}