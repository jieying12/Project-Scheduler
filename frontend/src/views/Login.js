import React from 'react'
import { useState } from 'react'
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "../hooks/useLogin"

import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CustomButton from '../components/CustomButton';

import Bg from '../assets/landing_page.png'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={7}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ color: "secondary.main" }} variant="h4" fontWeight="bold">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, textAlign: 'center' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email address"
              name="email"
              autoComplete="email"
              autoFocus
              color="secondary"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'} value={password}
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              color="secondary"
              InputProps={{
                endAdornment:
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
              }}
            />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="body2">Don't have an account?</Typography>
              <Link component={RouterLink} to="/signup" variant="body2" color="secondary" style={{ paddingLeft: 4 }}>
                Sign Up
              </Link>
            </div>
            <CustomButton disabled={isLoading} variant='contained' color="primary"
              type="submit"
              sm={2}
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </CustomButton>
            {error && <div className="error">{error}</div>}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={5}
        sx={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  )
}

export default Login