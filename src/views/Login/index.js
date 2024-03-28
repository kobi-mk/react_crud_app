import  React ,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Login() {

  const navigate = useNavigate();

  const [state,setState] = useState({
    username:"",
    password:""
  })
  const [error,setError] = useState({
    username:false,
    password:false
  })

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name]:value
    })
  }

  const handleSubmit = (event) => {
    let errorObj = {
      username:false,
      password:false,
    }

    if(state.username === "admin"){
      errorObj.username = false
    }else{
      errorObj.username = true
    }
    if(state.password === "admin"){
      errorObj.password = false
    }else{
      errorObj.password = true
    }
    
    setError(errorObj)

    if(!errorObj.username && !errorObj.password){
      navigate("/todo")
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="jhh" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              onChange={handleChange}
              // autoComplete="off"
              autoFocus
              helperText={error.username ? "Invalid User Name" : ""}
              error={error.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              // autoComplete="current-password"
              helperText={error.password ? "Invalid Password" : ""}
              error={error.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}