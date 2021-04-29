import React, { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableRow, TableHead,
    TableContainer, Paper, makeStyles, Container,
    Typography, Button, Grid, IconButton
} from '@material-ui/core';
import { AddCircle, Edit, Delete } from '@material-ui/icons';
import { ScaleLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import { getInstitutes, addInstitute, getInstitute, updateInstitute, deleteInstitute } from '../data/instituteData';
import InstituteDialog from './InstituteDialog';

const Institute = () => {
    const classes = useStyles();
    const [institutes, setInstitutes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formMode, setFormMode] = useState(true);
    const [instId, setInstId] = useState('');
    const [name, setName] = useState('');
    const [contactnumber, setContactNumber] = useState('');
    const [category, setCategory] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('');
    const [rating, setRating] = useState('');
    const [openingtime, setOpeningTime] = useState('');
    const [closingtime, setClosingTime] = useState('');
    const [image, setImage] = useState('');
    const override = `
        display: flex;
        align-items: center;
        justify-content: center;    
        border-color: red;
    `;
    const handleClose = () => {
        setOpen(false);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleContactNumber = (event) => {
        setContactNumber(event.target.value);
    }
    const handleCategory = (event) => {
        setCategory(event.target.value);
    }
    const handleCity = (event) => {
        setCity(event.target.value);
    }
    const handleProvince = (event) => {
        setProvince(event.target.value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleLocation = (event) => {
        setLocation(event.target.value);
    }
    const handleRating = (event) => {
        setRating(event.target.value);
    }
    const handleOpeningTime = (event) => {
        setOpeningTime(event.target.value);
    }
    const handleClosingTime = (event) => {
        setClosingTime(event.target.value);
    }
    const handleImage = (event) => {
        setImage(event.target.value);
    }
    const getlist = async () => {
        try {
            setLoading(true);
            const list = await getInstitutes();
            setInstitutes(list);
            setLoading(false);
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }
    const getOneInstitute = async (id) => {
        try {
            setFormMode(false);
            setInstId(id);
            const response = await getInstitute(id);
            setName(response.name);
            setContactNumber(response.contactnumber);
            setCategory(response.category);
            setCity(response.city);
            setProvince(response.province);
            setAddress(response.address);
            setLocation(response.location);
            setRating(response.rating);
            setOpeningTime(response.openingTime);
            setClosingTime(response.closingTime);
            setImage(response.image);
            setOpen(true);
        } catch (error) {
            toast.error(error.message);
        }

    }
    const deleteHandler = async (id) => {
        try {
            await deleteInstitute(id);
            getlist();
            toast.success('Institute Deleted Successfully');
        } catch (error) {
            toast.error(error.message);
        }
    }
    const handleAdd = () => {
        setOpen(true);
        setFormMode(true);
        setName('');
        setContactNumber('');
        setCategory('');
        setCity('');
        setProvince('');
        setAddress('');
        setLocation('');
        setRating('');
        setOpeningTime('');
        setClosingTime('');
        setImage('');

    }

    const addInstituteHandler = async () => {
        try {
            const institute = {
                name,
                contactnumber,
                category,
                city,
                province,
                address,
                location,
                rating,
                openingtime,
                closingtime,
                image
            }
            if (formMode) {
                await addInstitute(institute);
                toast.success('Institute Added Successfully');
                getlist();
                setOpen(false);
                setName('');
                setContactNumber('');
                setCategory('');
                setCity('');
                setProvince('');
                setAddress('');
                setLocation('');
                setRating('');
                setOpeningTime('');
                setClosingTime('');
                setImage('');
                


            } else {
                await updateInstitute(instId, institute);
                toast.success('Institute Updated Successfully');
                getlist();
                setOpen(false);
                setName('');
                setContactNumber('');
                setCategory('');
                setCity('');
                setProvince('');
                setAddress('');
                setLocation('');
                setRating('');
                setOpeningTime('');
                setClosingTime('');
                setImage('');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getlist();
    }, []);
    return (
        <Container className={classes.container}>
            <ToastContainer />
            <TableContainer component={Paper}>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography className={classes.title} variant="h6" component="div">
                            All Institutes
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAdd}
                            className={classes.button}
                            startIcon={<AddCircle />}
                        >Add</Button>
                    </Grid>
                </Grid>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.head}>Name</TableCell>
                            <TableCell className={classes.head}>Contact Number</TableCell>
                            <TableCell className={classes.head}>Location</TableCell>
                            <TableCell className={classes.head}>Category</TableCell>
                            <TableCell className={classes.head}>Address</TableCell>
                            <TableCell className={classes.head}>City</TableCell>
                            <TableCell className={classes.head}>Province</TableCell>   
                            <TableCell className={classes.head}>Rating</TableCell>
                            <TableCell className={classes.head}>openingTime</TableCell>
                            <TableCell className={classes.head}>ClosingTime</TableCell>
                            <TableCell className={classes.head}>Image</TableCell>
                            <TableCell className={classes.head}>Actions</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {institutes.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7}>
                                    <ScaleLoader
                                        css={override}
                                        size={150}
                                        color={"#234bc6"}
                                        loading={loading} />
                                </TableCell>
                            </TableRow>
                        ) : (
                            <>
                                {institutes.map((inst) => (
                                    <TableRow key={inst.id}>
                                        <TableCell>{inst.name} </TableCell>
                                        <TableCell>{inst.contactnumber}</TableCell>
                                        <TableCell>{inst.category}</TableCell>
                                        <TableCell>{inst.city}</TableCell>
                                        <TableCell>{inst.province}</TableCell>
                                        <TableCell>{inst.address}</TableCell>
                                        <TableCell>{inst.location}</TableCell>
                                        <TableCell>{inst.rating}</TableCell>
                                        <TableCell>{inst.openingtime}</TableCell>
                                        <TableCell>{inst.closingtime}</TableCell>
                                        <TableCell>{inst.image}</TableCell>

                                        <TableCell>
                                            <IconButton onClick={() => getOneInstitute(inst.id)} color="primary" aria-label="update institute">
                                                <Edit />
                                            </IconButton>
                                            <IconButton onClick={() => deleteHandler(inst.id)} color="primary" aria-label="delete institute">
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}

                            </>
                        )}

                    </TableBody>
                </Table>
            </TableContainer>
            <InstituteDialog
                open={open}
                close={handleClose}
                formmode={formMode}
                name={name}
                contactnumber={contactnumber}
                category={category}
                city={city}
                province={province}
                address={address}
                location={location}
                rating={rating}
                openingtime={openingtime}
                closingtime={closingtime}
                image={image}

                changeName={handleName}
                changecontactnumber={handleContactNumber}
                changeAddress={handleAddress}
                changeLocation={handleLocation}
                changeRating={handleRating}
                changeOpeningTime={handleOpeningTime}
                changeClosingTime={handleClosingTime}
                changeImage={handleImage}
                addInstitute={addInstituteHandler}
            />
        </Container>
    );
}


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    container: {
        marginTop: '40px'
    },
    title: {
        flex: '1 1 100%',
        padding: '20px'
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    button: {
        margin: theme.spacing(1),
        float: 'right',
    },
}));

export default Institute;





















// import React, { useEffect, useState } from 'react';
// import {Table, TableBody, TableCell, TableRow, TableHead,
//     TableContainer, Paper, makeStyles, Container,
//     Typography, Button, Grid, IconButton} from '@material-ui/core';
// import {AddCircle, Edit, Delete} from '@material-ui/icons';
// import {ScaleLoader} from 'react-spinners';
// import {ToastContainer, toast} from 'react-toastify';
// import {getCustomers, addCustomer, getCustomer, updateCustomer, deleteCustomer} from '../data/customerData';
// import CustomerDialog from './CustomerDialog';

// const Customer = () => {
//     const classes  = useStyles();
//     const [customers, setCustomers] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [open, setOpen] = useState(false);
//     const [formMode, setFormMode] = useState(true);
//     const [custId, setCustId] = useState('');
//     const [firstname, setFirstName] = useState('');
//     const [lastname, setLastName] = useState('');
//     const [phonenumber, setPhoneNumber] =  useState('');
//     const [maritalstatus, setMaritalStatus] = useState('Single');
//     const [gender, setGender] = useState('Female');
//     const [city, setCity] = useState('');
//     const [postcode, setPostCode] = useState('');
//     const override =`
//         display: flex;
//         align-items: center;
//         justify-content: center;    
//         border-color: red;
//     `;
//     const handleClose = () => {
//         setOpen(false);
//     }
//     const handleFirstName = (event) => {
//         setFirstName(event.target.value);
//     }
//     const handleLastName = (event) => {
//         setLastName(event.target.value);
//     }
//     const handlePhoneNumber = (event) => {
//         setPhoneNumber(event.target.value);
//     }
//     const handleMaritalStatus = (event) => {
//         setMaritalStatus(event.target.value);
//     }
//     const handleGender = (event) => {
//         setGender(event.target.value);
//     }
//     const handleCity = (event) => {
//         setCity(event.target.value);
//     }
//     const handlePostCode = (event) => {
//         setPostCode(event.target.value);
//     }
//     const getlist = async () => { 
//         try {
//             setLoading(true);
//             const list = await getCustomers();
//             setCustomers(list);
//             setLoading(false);
//         } catch (error) {
//             toast.error(error.message);
//             setLoading(false);
//         }
//     }
//     const getOneCustomer = async (id) => {
//             try {
//                 setFormMode(false);
//                 setCustId(id);
//                 const response = await getCustomer(id);
//                  setFirstName(response.firstname);
//                  setLastName(response.lastname);
//                  setPhoneNumber(response.phonenumber);
//                  setMaritalStatus(response.maritalstatus);
//                  setGender(response.gender);
//                  setCity(response.city);
//                  setPostCode(response.postcode);
//                  setOpen(true);
//             } catch (error) {
//                 toast.error(error.message);
//             }

//     }
//     const deleteHandler = async (id) => {
//             try {
//                 await deleteCustomer(id);
//                 getlist();
//                 toast.success('Customer Deleted Successfully');
//             } catch (error) {
//                 toast.error(error.message);
//             }
//     }
//     const handleAdd = () => {
//             setOpen(true);
//             setFormMode(true);
//             setFirstName('');
//             setLastName('');
//             setPhoneNumber('');
//             setPostCode('');
//             setCity('');
//             setMaritalStatus('Single');
//             setGender('Female'); 
//     }

//     const addCustomerHandler = async () => {
//             try {
//                  const customer = {
//                      firstname,
//                      lastname,
//                      phonenumber,
//                      maritalstatus,
//                      gender,
//                      city,
//                      postcode
//                  }
//                 if (formMode) {
//                     await addCustomer(customer);
//                     toast.success('Customer Added Successfully');
//                     getlist();
//                     setOpen(false);
//                     setFirstName('');
//                     setLastName('');
//                     setPhoneNumber('');
//                     setPostCode('');
//                     setCity('');
//                     setMaritalStatus('Single');
//                     setGender('Female'); 
//                 }else {
//                     await updateCustomer(custId, customer);
//                     toast.success('Customer Updated Successfully');
//                     getlist();
//                     setOpen(false);
//                     setFirstName('');
//                     setLastName('');
//                     setPhoneNumber('');
//                     setPostCode('');
//                     setCity('');
//                     setMaritalStatus('Single');
//                     setGender('Female'); 
//                 }
//             } catch (error) {
//                 toast.error(error.message);
//             }
//     }

//     useEffect(() => {
//         getlist();
//     }, []);
//     return (
//         <Container className={classes.container}>
//             <ToastContainer/>
//             <TableContainer component={Paper}>
//                 <Grid container>
//                     <Grid item xs={8}>
//                     <Typography className={classes.title} variant="h6" component="div">
//                         All Customers
//                     </Typography>
//                     </Grid>
//                     <Grid item xs={4}>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={handleAdd}
//                         className={classes.button}
//                         startIcon={<AddCircle/>}
//                     >Add</Button>
//                     </Grid>
//                 </Grid>
//                 <Table className={classes.table}>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell className={classes.head}>Full Name</TableCell>
//                             <TableCell className={classes.head}>Phone</TableCell>
//                             <TableCell className={classes.head}>Marital Status</TableCell>
//                             <TableCell className={classes.head}>Gender</TableCell>
//                             <TableCell className={classes.head}>City</TableCell>
//                             <TableCell className={classes.head}>Post Code</TableCell>
//                             <TableCell className={classes.head}>Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {customers.length === 0 ? (
//                             <TableRow>
//                                 <TableCell colSpan={7}>
//                                     <ScaleLoader 
//                                      css={override}
//                                     size={150}
//                                     color={"#eb4034"}
//                                     loading={loading}/>
//                                 </TableCell>
//                             </TableRow>
//                         ) : (
//                             <>
//                             {customers.map((cust) => (
//                                 <TableRow key={inst.id}>
//                                   <TableCell>{inst.firstname} {inst.lastname}</TableCell>
//                                   <TableCell>{inst.phonenumber}</TableCell>
//                                   <TableCell>{inst.maritalstatus}</TableCell>
//                                   <TableCell>{inst.gender}</TableCell>
//                                   <TableCell>{inst.city}</TableCell>
//                                   <TableCell>{inst.postcode}</TableCell>
//                                   <TableCell>
//                                     <IconButton onClick={() => getOneCustomer(inst.id)} color="primary" aria-label="update customer">
//                                             <Edit />
//                                     </IconButton>
//                                     <IconButton onClick={() => deleteHandler(inst.id)} color="secondary" aria-label="delete customer">
//                                         <Delete />
//                                     </IconButton>
//                                   </TableCell>
//                               </TableRow>
//                             ))}

//                             </>
//                         )}

//                     </TableBody>
//                 </Table>  
//             </TableContainer>
//             <CustomerDialog
//                 open={open} 
//                 close={handleClose}
//                 formmode={formMode}
//                 firstname={firstname}
//                 lastname={lastname}
//                 phonenumber={phonenumber}
//                 postcode={postcode}
//                 city={city}
//                 status={maritalstatus}
//                 gender={gender}
//                 changeFirstname={handleFirstName}
//                 changeLastname={handleLastName}
//                 changephonenumber={handlePhoneNumber}
//                 changepostcode={handlePostCode}
//                 changeCity={handleCity}
//                 changeStatus={handleMaritalStatus}
//                 changeGender={handleGender}
//                 addCustomer={addCustomerHandler}
//             />
//         </Container>
//     );
// }


// const useStyles = makeStyles((theme) => ({
//     table: {
//         minWidth: 650,
//     },
//     container: {
//         marginTop: '40px'
//     }, 
//     title: {
//         flex: '1 1 100%',
//         padding: '20px'
//     },
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     button: {
//         margin: theme.spacing(1),
//         float: 'right',
//     },
// }));

// export default Customer;