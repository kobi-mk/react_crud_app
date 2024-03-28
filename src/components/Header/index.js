import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    const logOut = () => {
        navigate("/login")
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display:"flex",justifyContent:"flex-end" }}>
            <Box >
                <Button sx={{width:100}} color="inherit"> ToDo</Button>
            </Box>
            <Box >
                <Button sx={{width:100}} color="inherit" onClick={logOut}>Logout</Button>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}