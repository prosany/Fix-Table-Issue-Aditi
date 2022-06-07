// import React from "react";
// // import TableRow from '@mui/material/TableRow';
// // import TableCell from '@mui/material/TableCell';
// import Checkbox from '@mui/material/Checkbox';
// import AttendanceTable from "../AttendanceTable/AttendanceTable";
// // import Attendancetable from '../AttendanceTable/Attendancetable';

// const TableRowAttendance = () => {

//     const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = React.useState(0);
//     function handleChk() {
//         setTotalSelectedCheckboxes(document.querySelectorAll('input[type=checkbox]:checked').length);
//     }
//     React.useEffect(() => {
//         console.log(totalSelectedCheckboxes);
//     }, [totalSelectedCheckboxes]);

//     return (

//         <>

//             {/* <Checkbox
//                 value={1} onChange={() => handleChk()}
//                 color="primary"
//             /> */}

//             {/* {

//                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map((i) => (
//                     <TableCell align="right" padding="checkbox" sx={{ border: 1 }}>
//                         <Checkbox
//                             value={1} onChange={() => handleChk()}
//                             color="primary"
//                         />

//                     </TableCell>

//                 ))

//             } */}
//             <AttendanceTable
//                 totalSelectedCheckboxes={totalSelectedCheckboxes}
//             ></AttendanceTable>

//         </>

//     );
// };
// export default TableRowAttendance;