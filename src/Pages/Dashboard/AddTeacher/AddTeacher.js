import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Alert } from "@mui/material";

const AddTeacher = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleTeacherSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/addTeacher', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    // setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (
        <div>

            <h2>Add Teacher</h2>

            <form onSubmit={handleTeacherSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type='email'
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type='submit' variant='contained'>Add Teacher</Button>
            </form>
            {success && <Alert severity="success"  >Add Teacher successfully!!! </Alert>}
            <h2>Courses: </h2>
        </div>
    );
};
export default AddTeacher;







