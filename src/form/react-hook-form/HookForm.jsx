import React from 'react'
import { useForm } from 'react-hook-form'

const HookForm = () => {

    const {
        register, //registers input field into the form
        handleSubmit, // wrap ur onSubmit function to handle validation
        formState: { errors }, //contains all validation errors
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log('form datas', data);
        alert("form submitted");
        reset();
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'grey' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>React hook form</h2>

                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                     type="email"
                     {...register("email",{required:"Email is required"})}
                      />
                      {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default HookForm
