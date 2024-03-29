import React ,{useState} from 'react';
import Paper from '@mui/material/Paper';
import { Button, Grid, TextField } from '@mui/material';

export default function SearchInput({handleSearch}) {

  const [searchKey, setSearchKey] = useState("");
  
  const handleInputChange = (event) => {
    setSearchKey(event.target.value);
  };

  return (
    <Paper sx={{ width: '100%', padding:"16px 24px" }}>
        <Grid container>
            <Grid item xs={8} sm={9}>
                <TextField fullWidth placeholder="Search..." id="fullWidth" size="small" InputLabelProps={{ shrink: false }} onChange={handleInputChange} />
            </Grid>
            <Grid item xs={4} sm={3} sx={{paddingLeft:2}}>
                <Button variant="contained" color="secondary" fullWidth sx={{height:"40px"}} onClick={()=>handleSearch(searchKey)}>Search</Button>
            </Grid>
        </Grid>
    </Paper>
  );
}
