import { Grid, Hidden } from '@mui/material';
import './login.css';
import LoginForm from './LoginForm';


const Login = () => (
  <div >
	<Grid style={{ width: '100%', height: '100vh' }} container spacing={0}>
		<Hidden only={['xs', 'sm']}>
			<Grid item md={6} lg={6} sm={6} xs={6} sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}/>
		</Hidden>
		<Grid item xs={12} sm={12} md={6} lg={6}>
			<div className="login-form-panel">
				<LoginForm />
			</div>
		</Grid>
	</Grid>
  </div>
);

export default Login;
