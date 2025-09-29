import React, { useEffect, useState } from 'react';
import './crud.css'

const Crud = () => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })
    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState({});
    const [isLoaded, setIsLoaded] = useState(false); //Add this to track loading state


    //load user from localstorage(on mount)
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                //converting a string into js object so you can use it in your code
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser)
            } catch (error) {
                console.error("error is:", error);
            }
        }
        setIsLoaded(true);
    }, []);

    //save users to localstorage(whenever user changes, but only after initial load)
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users, isLoaded])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validate = () => {
        let newErrors = {};
        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = "Name is required";

        if (!email) newErrors.email = "Email is required!";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email";

        if (!age) newErrors.age = "Age is required!";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must between 1 and 120"

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ? formData : user));
            setEditMode(false);
        } else {
            const newUser = { ...formData, id: Date.now().toString() };
            setUsers([...users, newUser])            
        }

        setFormData({ id: '', name: '', email: '', age: '' });
        setError({});
    }

    const handleEdit = (user) =>{
        setFormData(user);
        setEditMode(true);
    }

    const handleClearAll = () =>{
        if (window.confirm('Are you sure you want to clear all data?')) {
            setUsers([]);
            localStorage.removeItem("users");
            //Also clear the form in edit mode
            if (editMode) {
                setFormData({id:'', name:'', age:'', email:''});
                setEditMode(false);
                setError({})
            }
        }
    }

    const handleCancel = () =>{
         setFormData({id:'', name:'', age:'', email:''});
         setEditMode(false);
         setError({})
    }

    return (
        <div>
            <h1>REACT CRUD</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name='name'
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        placeholder='Email'
                        onChange={handleChange}
                    />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

                </div>
                <div>
                    <input
                        type="number"
                        name='age'
                        value={formData.age}
                        placeholder='Age'
                        onChange={handleChange}
                    />
                    {error.age && <p style={{ color: 'red' }}>{error.age}</p>}

                </div>

                <button type='submit'>{editMode ? "Update user" : 'Add User'}</button>
                {editMode && (
                    <button onClick={handleCancel} type='button' style={{ marginLeft: '10px' }}>Cancel</button>
                )}

            </form>

            <hr />

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginBottom:'10px'}}>
                <h2>User List</h2>
                {users.length > 0 && (
                    <button
                    onClick={handleClearAll}
                    >Clear all Data</button>
                )}
            </div>

            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(usr => (
                            <tr key={usr.id}>
                                <td>{usr.name}</td>
                                <td>{usr.email}</td>
                                <td>{usr.age}</td>
                                <td>
                                    <button onClick={()=>handleEdit(usr)}>Edit</button>
                                    <button style={{marginLeft:'10px'}}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ):(
                <p>No users added yet.</p>
            )}
        </div>
    )
}

export default Crud
