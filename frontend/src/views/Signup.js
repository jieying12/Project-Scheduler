import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { Link as RouterLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CustomButton from '../components/CustomButton';

import Bg from '../assets/landing_page.png'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { signup, error, isLoading } = useSignup()

  const props = useSpring({
    from: { transform: "translate(40%,0)" },
    to: { transform: "translate(0,0)" },
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(username, email, password)
  }

  const handleShowPassword = () => setShowPassword(!showPassword);

  const AnimatedGrid = animated(Grid);

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <AnimatedGrid item xs={12} sm={7} style={props}>
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
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth:450, mt: 1, textAlign: 'center' }}>
          <TextField
              margin="normal"
              required
              fullWidth
              type="username"
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              color="secondary"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email address"
              name="email"
              autoComplete="email"
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
              <Typography variant="body2">Already a member?</Typography>
              <Link component={RouterLink} to="/" variant="body2" color="secondary" style={{ paddingLeft: 4 }}>
                Login
              </Link>
            </div>
            <CustomButton disabled={isLoading} variant='contained' color="primary"
              type="submit"
              sm={2}
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </CustomButton>
            {error && <div className="error">{error}</div>}
          </Box>
        </Box>
      </AnimatedGrid>
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

export default Signup