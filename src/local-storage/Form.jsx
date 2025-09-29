import React, { useEffect, useState } from 'react'

const Form = () => {
    const [users, setUsers] = useState([]);

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        age: '',
        number: ''
    })

    // const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if(storedUsers) setUsers(JSON.parse(storedUsers))
    }, [])

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.age || !formData.number){
            alert("Please fill in all fields");
            return;
        }

        // if (editMode) {
        //     setUsers(
        //         users.map((user) => (user.id === formData.id ? formData : user))
        //     )
        //     setEditMode(false);
        // }else{
            const newUser = {...formData, id:Date.now().toString()};
            setUsers([...users, newUser])
        // }
        
        setFormData({ id:'', name:'', age:'',number:''})
    }

    return (
        <div>
            <h1>Simple react crud</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name='name'
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br /> <br />
                    <input
                        type="number"
                        name='age'
                        value={formData.age}
                        placeholder='Age'
                        onChange={handleChange}
                    />
                    <br /> <br />
                    <input
                        type="text"
                        name='number'
                        placeholder='Number'
                        value={formData.number}
                        onChange={handleChange}
                    />
                    <br /> <br />
                </div>

                <div>
                    <button type='Submit'>
                       Add User
                    </button>
                 
                </div>
            </form>
        </div>
    )
}

export default Form
