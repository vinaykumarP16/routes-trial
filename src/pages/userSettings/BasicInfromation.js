import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function BasicInfromation() {
  return (
    <div>
      <>
        <Typography>Basic Information</Typography>
        <Grid>
          <TextField fullWidth variant="outlined" placeholder="first name"/>
          <TextField fullWidth variant="outlined" placeholder="last name"/>
          <TextField fullWidth variant="outlined" placeholder="phone number"/>
          <TextField fullWidth variant="outlined" placeholder="email"/>
        </Grid>
        <Button variant="contained">Save</Button>
      </>
    </div>
  );
}

export default BasicInfromation;
