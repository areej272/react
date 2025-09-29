import React, { useState } from 'react'
import './form.css'


const ComplicatedForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target; //called every time a user types/changes a form field
        setFormData(prev => ({
            ...prev,  //uses the spread operator to keep other values unchanged
            [name]: value
        }))
    }

    const validate = () => {
        const newErrors = {}; //empty newErrors object created
        const { name, email, age, password, confirmPassword, gender } = formData;

        if (!name.trim()) newErrors.name = "Name is required";

        if (!email) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email is invalid!";

        if (!age) newErrors.age = "Age is required!";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 & 120";

        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Password must be atleast 6 characters";

        if (!confirmPassword) newErrors.confirmPassword = "Confirm password is required";
        else if (password !== confirmPassword) newErrors.confirmPassword = "Password do not match";

        if (!gender) newErrors.gender = "Gender is required!";

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("Form Submitted");
            console.log("Form Data:", formData);

            //clear form fields after successfull submission
            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmPassword: '',
                gender: ''
            })

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
                <input
                    type="email"
                    value={formData.email}
                    name='email'
                    placeholder='Enter your email'
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
                <input
                    type="text"
                    name='age'
                    value={formData.age}
                    placeholder='Enter your Age'
                    onChange={handleChange}
                />
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            </div>

            <div>
                <input
                    type="password"
                    name='password'
                    value={formData.password}
                    placeholder='Enter Your Password'
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <div>
                <input
                    type="password"
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    placeholder='Confirm Password'
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
            </div>

            <div>
                <label>
                    <input
                        type="radio"
                        name='gender'
                        value='male'
                        chacked={formData.gender === 'male'}
                        onChange={handleChange}
                    />
                    Male
                </label>

                <label >
                    <input
                        type="radio"
                        name='gender'
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                    />
                    Female
                </label>

                 <label >
                    <input
                        type="radio"
                        name='gender'
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleChange}
                    />
                    Other
                </label>
                {errors.gender && <p style={{color:'red'}}>{errors.gender}</p>}
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default ComplicatedForm
