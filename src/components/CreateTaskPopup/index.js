import React, { useState, useEffect }  from "react";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { MenuItem,TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CreateQuestionPopup({setNewQuestionPopup}) {
  const [open, setOpen] = React.useState(true);
  const [state,setState] = useState({
    question:"",
    category:"1",
  })
  const [error,setError] = useState({
    question:false,
    category:false,
  })

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name]:value
    })
  }

  const handleClose = () => {
    setNewQuestionPopup(false);
  };

  const handleSubmit = () => {
    let errorCheck = 0;
    
    let errorObj = {
        question:false,
        category:false,
    }

    if(!state.question || state.question.length > 500){
        errorCheck = 1;
        errorObj.question =  true
    }
    if(!state.category){
        errorCheck = 1;
        errorObj.category =  true
    }

    setError(errorObj)

    if(errorCheck == 0){
        let postData= {
          question:state.question,
          category:state.category,
        }

        // need to change after api integration
        handleClose()
        console.log("post Data",postData);
    }
    
  };

  return (
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={{textAlign:"center"}}>
          Create New Task
        </BootstrapDialogTitle>
        <DialogContent dividers>

            <TextField
                size="small"
                error={error.question}
                id="outlined-error-helper-text"
                label="Task"
                name="question"
                value={state.question}
                helperText={error.question && !state.question ? "This field is required" :state.question.length > 500 ? "This field is is too length":""}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                rows={3}
                multiline
                style={{marginTop:20}}
            />          
            <TextField
                size="small"
                select
                error={error.category}
                id="outlined-error-helper-text"
                label="Category"
                name="category"
                value={state.category}
                helperText={error.category && "Category is required"}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                style={{marginTop:20}}
            >
                <MenuItem value={"1"}>About Company</MenuItem>
                <MenuItem value={"2"}>About General</MenuItem>
            </TextField>            
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="secondary" fullWidth onClick={handleSubmit} style={{marginTop:20}}>
                Create
            </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

