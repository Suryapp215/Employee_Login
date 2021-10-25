import { Button, TextField } from '@material-ui/core'
import React from 'react'

const EmployeeLogin = () => {
    return (
        <div align="center">
           <TextField variant="outlined" label="Full Name" color="primary" margin="normal" required></TextField><br></br>
           <TextField variant="outlined" label="Address" color="primary" margin="normal" ></TextField><br></br>
           <TextField type="number" variant="outlined" label="Pincode" color="primary" margin="normal"></TextField><br></br>
           <TextField type="number" variant="outlined" margin="normal" label="Mobile No" color="primary" ></TextField><br></br>
           <TextField type="email" variant="outlined" margin="normal" label="Email id" color="primary" ></TextField><br></br>
           <TextField type="password" variant="outlined" label="Password" margin="normal" color="primary"
           required ></TextField><br></br>
           <TextField type="password" variant="outlined" label="Confirm Password" color="primary" margin="normal"
           required ></TextField><br></br>
           <Button varient="contained" color="primary">Submit</Button>


        </div>
    )
}

export default EmployeeLogin

