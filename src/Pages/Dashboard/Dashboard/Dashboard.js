import * as React from 'react';
// import useState from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // useParams,
    useRouteMatch
} from "react-router-dom";
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddTeacher from '../AddTeacher/AddTeacher';
import TeacherDashboard from '../Teacherdashboard/TeacherDashboard';

import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';
import AttendanceTable from '../AttendanceTable/AttendanceTable';
// import StudentSubmitModal from '../StudentSubmitModal/StudentSubmitModal';

// const drawerWidth = 200;
const drawerWidth = 230;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


// function Dashboard(prop) {
function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    // const { window } = props;
    // const [open, setOpen] = React.useState(false);
    // const [course, setCourse] = React.useState('');

    // const { user } = useAuth();
    // const initialInfo = { studentName: user.displayName, studentId: '' }
    // const [studentInfo, setStudentInfo] = useState(initialInfo);



    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const { teacher } = useAuth();

    // const handleDrawerToggle = () => {
    //     setMobileOpen(!mobileOpen);
    // };

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    const drawer = (
        <div >
            {/* <Divider /> */}
            <Box sx={{ backgroundColor: '#58e7f3', height: '650px' }}>
                {/* <Box sx={{ height: '625px' }}> */}

                <Toolbar />
                <Link to='/'><Button
                    style={{
                        color: 'Black',
                        // borderRadius: 35,
                        // backgroundColor: "#21b6ae",
                        // padding: "18px 36px",
                        fontSize: "16px"
                    }}
                >Home</Button></Link>
                <Link to={`${url}/studentDashboard`}><Button
                    style={{
                        color: 'Black',
                        fontSize: "16px"
                    }}
                > Student Dashboard</Button></Link>
                <Link to={`${url}/attendanceTable`}><Button
                    style={{
                        color: 'Black',
                        fontSize: "16px"
                    }}
                >Attendance Table</Button></Link>


                {teacher &&
                    < Link to={`${url}/teacherDashboard`}><Button
                        style={{
                            color: 'Black',
                            fontSize: "16px"
                        }}
                    >Teacher Dashboard</Button></Link>
                }

                {
                    admin && <Box>
                        <Link to={`${url}/makeAdmin`}><Button
                            style={{
                                color: 'Black',
                                fontSize: "16px"
                            }}
                        >Make Admin</Button></Link>
                        <Link to={`${url}/addTeacher`}><Button
                            style={{
                                color: 'Black',
                                fontSize: "16px"
                            }}
                        >Add Teacher</Button></Link>
                    </Box>
                }
            </Box>

            {/*  <List>
               
    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
    </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div >
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    // width: drawerWidth,
                    mx: 5,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },

                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ backgroundColor: ' #58e7f3' }}>
                    <Box >
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </Box>
                </DrawerHeader>
                {/* <Divider style={{ color: ' #1d0326 ' }} /> */}
                <Divider style={{ backgroundColor: ' #1d0326 ' }}></Divider>
                {drawer}

                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))} */}
                {/* </List> */}
                {/* <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
            </Drawer>
            <Box>
                <Toolbar />
                {/* exact path={`${path}`} */}
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route exact path={`${path}/studentDashboard`}>
                        <StudentDashboard course></StudentDashboard>
                    </Route>
                    <Route exact path={`${path}/attendanceTable`}>
                        <AttendanceTable ></AttendanceTable>
                    </Route>
                    <Route path={`${path}/teacherDashboard`}>
                        <TeacherDashboard></TeacherDashboard>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addTeacher`}>
                        <AddTeacher ></AddTeacher>
                    </AdminRoute>
                </Switch>
            </Box>

            <Main open={open}>
                <DrawerHeader />

            </Main>
        </Box>
    );
}




//         <>
//             <Box sx={{ display: 'flex' }}>
//                 {/* sx={{ display: 'flex', backgroundColor: '  #eee18f  ', height: '600px' }} */}
//                 <CssBaseline />
//                 <AppBar
//                     position="fixed" open={open}
//                 // sx={{
//                 //     width: { sm: `calc(100% - ${drawerWidth}px)` },
//                 //     ml: { sm: `${drawerWidth}px` },
//                 // }}
//                 >
//                     <Toolbar>
//                         <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             edge="start"
//                             onClick={handleDrawerOpen}
//                             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//                         // sx={{ mr: 2, display: { sm: 'none' } }}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6" noWrap component="div">
//                             Dashboard
//                         </Typography>

//                     </Toolbar>
//                 </AppBar>

//                 <Drawer
//                     sx={{
//                         width: drawerWidth,
//                         flexShrink: 0,
//                         '& .MuiDrawer-paper': {
//                             width: drawerWidth,
//                             boxSizing: 'border-box',
//                         },
//                     }}
//                     variant="persistent"
//                     anchor="left"
//                     open={open}
//                 >
//                     <DrawerHeader>
//                         <IconButton onClick={handleDrawerClose}>
//                             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                         </IconButton>
//                     </DrawerHeader>
//                     <Divider />













//                     {/* <Box
//                     component="nav"
//                     sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                     aria-label="mailbox folders"
//                 >
//                     {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//                     {/* <Drawer
//                         container={container}
//                         variant="temporary"
//                         open={open}
//                         onClose={handleDrawerClose}
//                         ModalProps={{
//                             keepMounted: true, // Better open performance on mobile.
//                         }}
//                         sx={{
//                             display: { xs: 'block', sm: 'none' },
//                             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                         }}
//                     >
//                         {drawer}
//                     </Drawer>
//                     <Drawer
//                         variant="permanent"
//                         sx={{
//                             display: { xs: 'none', sm: 'block' },
//                             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                         }}
//                         open
//                     >
//                         {drawer}
//                     </Drawer>
//                 </Box> */}
//                     <Box
//                         component="main"
//                         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//                     >
//                         <Toolbar />
//                         {/* exact path={`${path}`} */}
//                         <Switch>
//                             <Route exact path={path}>
//                                 <DashboardHome></DashboardHome>
//                             </Route>
//                             <Route exact path={`${path}/studentDashboard`}>
//                                 <StudentDashboard course={course}></StudentDashboard>
//                             </Route>
//                             <Route exact path={`${path}/attendanceTable`}>
//                                 <AttendanceTable ></AttendanceTable>
//                             </Route>
//                             <Route path={`${path}/teacherDashboard`}>
//                                 <TeacherDashboard></TeacherDashboard>
//                             </Route>
//                             <AdminRoute path={`${path}/makeAdmin`}>
//                                 <MakeAdmin></MakeAdmin>
//                             </AdminRoute>
//                             <AdminRoute path={`${path}/addTeacher`}>
//                                 <AddTeacher course={course} setCourse={setCourse}></AddTeacher>
//                             </AdminRoute>
//                         </Switch>


//                         {/* <Typography paragraph>
//                     Select Your Cource
//                 </Typography> */}

//                         {/* <Grid
//                     sx={{
//                         display: 'grid',
//                         gap: 1,
//                         gridTemplateColumns: 'repeat(2, 1fr)',
//                     }}
//                     container spacing={2}>
//                     <Grid item xs={8}>
//                         <Cource></Cource>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Cource></Cource>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Cource></Cource>
//                     </Grid>
//                     <Grid item xs={8}>
//                         <Cource></Cource>
//                     </Grid>
//                 </Grid>
//  */}


//                     </Box>
//                     {/* <StudentSubmitModal
//                 studentInfo={studentInfo}
//                 setStudentInfo={setStudentInfo}
//             > </StudentSubmitModal>
//             <AttendanceTable
//                 studentInfo={studentInfo}
//             ></AttendanceTable> */}
//                     {/* </Box > */}

//                 </>
//                 );
// };
//                 {/*  
//               Dashboard.propTypes = { 

//                 * Injected by the documentation to work in an iframe.
//                 * You won't need it on your project.
//                 */
//                     //  window: PropTypes.func, */}
//                     {/* };   */ }

export default Dashboard;
