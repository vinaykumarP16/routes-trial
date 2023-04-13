import { Select, MenuItem, FormControl, InputLabel,Typography, Button } from "@mui/material";
import React from 'react'
import { menuOptions } from "../../util/optionUtils";

function BillingSection() {

    const [zone, setZone] = React.useState("");

 
    const handleChange = (event) => {
      setZone(event.target.value);
    };
  
  return (
    <div>
    <Typography>Billing Section</Typography>
    <br/>
    <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Select zone</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={zone}
          label="Age"
          onChange={handleChange}
          style={{margin:'10px'}}
        >
          {menuOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained"> Add New Customer</Button>
    </div>
  )
}

export default BillingSection