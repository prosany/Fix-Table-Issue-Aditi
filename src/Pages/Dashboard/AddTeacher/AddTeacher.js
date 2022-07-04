import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Alert } from "@mui/material";

const AddTeacher = ({ course, setCourse }) => {
  const [email, setEmail] = useState("");
  // const [course, setCourse] = useState('');
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleOnCourse = (e) => {
    setCourse(e.target.value);
  };

  const handleTeacherSubmit = (e) => {
    const user = { email };
    fetch("https://secure-temple-79203.herokuapp.com/users/addTeacher", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          // setEmail('');
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <h2>Add Teacher</h2>

      <form onSubmit={handleTeacherSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          name="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Add Teacher
        </Button>
      </form>
      {success && (
        <Alert severity="success">Add Teacher successfully!!! </Alert>
      )}
      <br></br>
      <h2>Courses: </h2>
      <TextField
        sx={{ width: "40%" }}
        label="Course"
        // type='email'
        name="courseName"
        onBlur={handleOnCourse}
        variant="standard"
      />
      <Button type="submit" variant="contained">
        Add Course
      </Button>
    </div>
  );
};
export default AddTeacher;
