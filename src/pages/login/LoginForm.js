import * as Yup from "yup";
import "./login.css";
import {
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {

  const navigate=useNavigate();
  // const location=useLocation();
  const [authenticated,setAuthenticated]=useState(false);
  

  useEffect(()=>{
    if(authenticated){
      navigate('/home')
    }
  },[authenticated, navigate])

  const handleSubmitForm = (formValues) => {
    console.log(formValues);
    setAuthenticated(true);
  };

  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (formValues) => handleSubmitForm(formValues),
  });

  return (
    <Paper className="paper-form-container">
      <a href="link here" rel="noreferrer" target="_blank">
        <img
          src={`https://zoopbox.com/supreme/public/assets/admin/img/auth-fav.png`}
          className="logo-placement"
          alt="logo"
        />
      </a>
      <form className="flex-column" onSubmit={handleSubmit}>
        <div className="input-spacing">
          <TextField
            className="input-spacing"
            error={Boolean(errors?.email)}
            helperText={errors?.email}
            id="email"
            name="email"
            label="Email ID"
            fullWidth
            size="small"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="input-spacing">
          <TextField
            className="input-spacing"
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors?.password}
            id="password"
            name="password"
            label="Password"
            size="small"
			type={"password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                    size="large"
                  ></IconButton>
                </InputAdornment>
              ),
            }}
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="login-button-container">
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default LoginForm;
