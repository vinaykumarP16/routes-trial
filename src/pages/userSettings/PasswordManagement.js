import { Button, Grid, TextField,Typography } from "@mui/material";
import React from "react";

function PasswordManagement() {
  return (
    <div>
    <Typography>Change Your Password</Typography>
      <Grid>
        <TextField fullWidth variant="outlined" placeholder="New Password" />
        <TextField fullWidth variant="outlined" placeholder="Confirm Password" />
      </Grid>
      <Button variant="contained" >Save</Button>
    </div>
  );
}

export default PasswordManagement;
