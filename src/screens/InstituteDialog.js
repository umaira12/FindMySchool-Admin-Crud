import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
    Dialog, DialogActions, DialogContent, DialogTitle,
    Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
} from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {
    KeyboardTimePicker
} from '@material-ui/pickers';


const InstituteDialog = (props) => {

    const classes = useStyles();
    const [category, setCategory] = React.useState('');
    const [city, setCity] = React.useState('');
    const [province, setProvince] = React.useState('');

    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    //   const handleDateChange = (date) => {
    //     setSelectedDate(date);
    //   };

    const handleChange = (event) => {
        setCategory(event.target.value);
        setCity(event.target.value);
        setProvince(event.target.value);
    };


    return (
        <Dialog
            fullWidth={true}
            maxWidth='lg'
            open={props.open}
            onClose={props.close}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{props.formmode ? 'Add New' : 'Update'}  Institute</DialogTitle>
            <ValidatorForm
                onSubmit={props.addInstitute}
            >
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Name"
                                onChange={props.changeName}
                                name="name"
                                value={props.name}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Contact Number"
                                onChange={props.changecontactnumber}
                                name="contactnumber"
                                value={props.contactnumber}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>


                        <Grid item xs={66}>
                            <form className={classes.container} noValidate>
                                <TextField
                                    id="time"
                                    label="Opening Time"
                                    type="time"
                                    // defaultValue="07:30"
                                    value={props.openingtime}
                                    name="openingtime"
                                    onChange={props.changeOpeningTime}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </form>

                        </Grid>

                        <Grid item xs={6}>
                            <form className={classes.container} noValidate>
                                <TextField
                                    id="time"
                                    label="Closing Time"
                                    type="time"
                                    defaultValue="07:30"
                                    onChange={props.closingtime}
                            
                                    value={props.closingtime}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </form>

                        </Grid>



                        <Grid item xs={4}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={category}
                                    onChange={handleChange}
                                    label="Category"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Private School</MenuItem>
                                    <MenuItem value={20}>Public </MenuItem>
                                    <MenuItem value={30}>Madrisa</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>




                        <Grid item xs={4}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={city}
                                    onChange={handleChange}
                                    label="City"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Lahore</MenuItem>
                                    <MenuItem value={20}>Karachi </MenuItem>
                                    <MenuItem value={30}>Islamabad</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item xs={4}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-uncontrolled-outlined-label">Province</InputLabel>
                                <Select
                                    // labelId="demo-simple-select-outlined-label"
                                    // id="demo-simple-select-outlined"
                                    value={province}
                                    onChange={handleChange}
                                    label="Province"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Punjab</MenuItem>
                                    <MenuItem value={20}>Sindh </MenuItem>
                                    <MenuItem value={30}>Balochistan</MenuItem>
                                    <MenuItem value={40}>KPK</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Address"
                                onChange={props.changeAddress}
                                name="address"
                                value={props.address}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>


                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Location"
                                onChange={props.changeLocation}
                                name="location"
                            value={props.location}
                            // validators={['required']}
                            // errorMessages={['this field is required']}
                            // autoComplete='off'
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Image"
                                onChange={props.changeimage}
                                name="image"
                                value={props.image}
                                // validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>



                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Backgroung Image"
                                onChange={props.changebg}
                                name="bg"
                                value={props.bg}
                                // validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>





                        <FormGroup>
        {/* <Label for="exampleFile">Add Image</Label> */}
        {/* <Input type="file" name="file" id="exampleFile" 
        onChange={props.changeimage}
        name="image"
        value={props.image}
        /> */}
       
      </FormGroup>



                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="secondary">
                        {props.formmode ? 'Add' : 'Update'}
                    </Button>
                    <Button onClick={props.close} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3),
        width: 300,
    },
}));

export default InstituteDialog;





















// import React from 'react';
// import {Dialog, DialogActions, DialogContent, DialogTitle, Button,
//     Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
// import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


// const CustomerDialog = (props) => {
//     return (
//         <Dialog
//         fullWidth={true}
//         maxWidth='lg'
//         open={props.open}
//         onClose={props.close}
//         aria-labelledby="max-width-dialog-title"
//         >
//             <DialogTitle>{props.formmode ?  'Add New' : 'Update'}  Customer</DialogTitle>
//             <ValidatorForm
//                 onSubmit={props.addCustomer}
//             >
//                 <DialogContent>
//                     <Grid container spacing={3}>
//                         <Grid item xs={6}>
//                             <TextValidator
//                             variant="outlined"
//                             margin="normal"
//                             fullWidth
//                             label="First Name"
//                             onChange={props.changeFirstname}
//                             name="firstname"
//                             value={props.firstname}
//                             validators={['required']}
//                             errorMessages={['this field is required']}
//                             autoComplete='off'
//                         />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <TextValidator
//                             variant="outlined"
//                             margin="normal"
//                             fullWidth
//                             label="Last Name"
//                             onChange={props.changeLastname}
//                             name="lastname"
//                             value={props.lastname}
//                             validators={['required']}
//                             errorMessages={['this field is required']}
//                             autoComplete='off'
//                         />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <TextValidator
//                                 variant="outlined"
//                                 margin="normal"
//                                 fullWidth
//                                 label="Phone Number"
//                                 onChange={props.changephonenumber}
//                                 name="phonenumber"
//                                 value={props.phonenumber}
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                                 autoComplete='off'
//                             />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <TextValidator
//                                 variant="outlined"
//                                 margin="normal"
//                                 fullWidth
//                                 label="Post Code"
//                                 onChange={props.changepostcode}
//                                 name="postcode"
//                                 value={props.postcode}
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                                 autoComplete='off'
//                             />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <TextValidator
//                                 variant="outlined"
//                                 margin="normal"
//                                 fullWidth
//                                 label="City"
//                                 onChange={props.changeCity}
//                                 name="city"
//                                 value={props.city}
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                                 autoComplete='off'
//                             />
//                         </Grid>
//                         <Grid item xs={3}>
//                             <FormControl component="fieldset">
//                                 <FormLabel component="legend">Gender</FormLabel>
//                                 <RadioGroup aria-label="gender" name="gender" value={props.gender} onChange={props.changeGender}>
//                                     <FormControlLabel value="Female" control={<Radio />} label="Female" />
//                                     <FormControlLabel value="Male" control={<Radio />} label="Male" />
//                                 </RadioGroup>
//                             </FormControl>
//                         </Grid>
//                         <Grid item xs={3}>
//                         <FormControl component="fieldset">
//                             <FormLabel component="legend">Marital Status</FormLabel>
//                             <RadioGroup aria-label="status" name="status" value={props.status} onChange={props.changeStatus}>
//                                 <FormControlLabel value="Single" control={<Radio />} label="Single" />
//                                 <FormControlLabel value="Married" control={<Radio />} label="Married" />
//                             </RadioGroup>
//                         </FormControl>
//                         </Grid>
//                     </Grid>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button type="submit" color="secondary">
//                        {props.formmode ? 'Add' : 'Update'}
//                     </Button>
//                     <Button onClick={props.close} color="primary">
//                         Close
//                     </Button>
//                 </DialogActions>
//             </ValidatorForm>
//         </Dialog>
//     );
// }

// export default CustomerDialog;