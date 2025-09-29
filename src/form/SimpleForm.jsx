import React, { useState } from 'react'

const SimpleForm = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required!')
        }else if(!/\S+@\S+\.\S+/.test(email)){
            setError('Email is invalid');
        }else{
            setError('');
            alert('Form submitted')
            console.log('form submited', email);
            setEmail('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="email"
             value={email} 
             onChange={(e) => setEmail(e.target.value)}
             placeholder='Enter your email'
              />
              {error && <p style={{color:'red'}}>{error}</p>}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SimpleForm
