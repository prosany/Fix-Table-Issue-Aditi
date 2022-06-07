import React from "react";
import { useState } from 'react';
import Button from '@mui/material/Button';
// import { Box } from "@mui/system";
// import Checkbox from '@mui/material/Checkbox';
// import useAuth from '../../../hooks/useAuth';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import AddTeacher from "../AddTeacher/AddTeacher";
// import AttendanceTable from "../AttendanceTable/AttendanceTable";
import StudentSubmitModal from "../StudentSubmitModal/StudentSubmitModal";
import { Alert } from "@mui/material";

const StudentDashboard = ({ course }) => {

    const [regSuccess, setRegSuccess] = useState(false);

    const [algo, setAlgo] = useState(true);
    const [datastru, setDatastru] = useState(true);

    const handleChange = (data) => {
        // console.log(data);
        if (data == 'Algorithm') {
            if (algo == true) {
                console.log(data, 'our value')
            }
            setAlgo(!algo)
        }
        if (data == 'DataStructure') {
            if (datastru == true) {
                // <AttendanceTable{datastru}></AttendanceTable>
                // console.log(data, 'our value')
            }
            setDatastru(!datastru)
        }
    }


    // const { user } = useAuth();

    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    // const handleChange = e => {
    //     let isChecked = e.target.checked;
    //     // do whatever you want with isChecked value
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     console.log(value);
    // }


    // const subject =[

    // ]


    return (
        <div>

            <h2>Please enrolled your course for this semester</h2>

            <Grid container spacing={0} direction="row"
                justifyContent="flex-start"
                alignItems="center">
                <Grid item xs={6} md={6}>

                    <input type='checkbox' value={algo} onChange={() => handleChange('Algorithm')}></input>Algorthm
                    <br></br>
                    <input type='checkbox' value={datastru} onChange={() => handleChange('DataStructure')}></input>DataStructure






                    {/* <Checkbox
                        otherProps onChange={e => this.handleChange(e)}
                    />
                    {/* {course} */}
                    {/* <Typography name='sub2'>Data Structure</Typography> */}
                    {/* <Checkbox */}
                    {/* otherProps onChange={e => this.handleChange(e)} */}
                    {/* /> */}
                    {/* <Typography >Algorithm</Typography>  */}
                </Grid>

            </Grid>

            <Button onClick={handleModalOpen} variant="contained"
                sx={{ p: 2, m: 3 }}
                style={{ color: 'black', borderRadius: 35, fontSize: "18px", backgroundColor: '#58e7f3' }}
            >
                Register</Button>

            {regSuccess && <Alert severity="success"  >Student Registration is successfully done!!! </Alert>}


            {/* <Box sx={{ flexGrow: 1 }} flexDirection="column" alignItems="stretch" padding={1}>


                    </Box> */}


            {/* <Button variant="contained" sx={{ p: 2, m: 3 }}>Data Structure</Button>
                <Button variant="contained" sx={{ p: 2, m: 3 }}>Algorithm</Button>
                <Button variant="contained" sx={{ p: 2, m: 3 }}>Javascript</Button>
                <Button variant="contained" sx={{ p: 2, m: 3 }}>Compiler</Button>
                <Button variant="contained" sx={{ p: 2, m: 3 }}>Numerical</Button> */}

            <StudentSubmitModal
                openModal={openModal}
                handleModalClose={handleModalClose}
                setRegSuccess={setRegSuccess}
            ></StudentSubmitModal>
        </div >
    );

};
export default StudentDashboard;







