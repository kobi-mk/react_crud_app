import React ,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function DetailPopup({setSelectedId,selectedId}) {

  const [open, setOpen] = useState(true);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('sm');
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData()
  }, [selectedId])

  const fetchData = async (search) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${selectedId}`)

    if (response.ok) {
        const todo = await response.json()
        setData(todo)
      } else {
        setData({})
      }
  };

  const handleClose = () => {
    setSelectedId("")
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              lineHeight:2
            }}
          > 
            <Box sx={{width:"50%"}}>
              <Box>
                User Id
              </Box>
              <Box>
                Id
              </Box>
              <Box>
                Completed
              </Box>
              <Box>
                Title
              </Box>
            </Box>

            {Object.keys(data).length &&
                <Box sx={{width:"50%"}}>
                <Box>
                    {data.userId}
                </Box>
                <Box>
                    {data.id}
                </Box>
                <Box >
                    {data.completed ? <CheckIcon htmlColor="green" /> : <ClearIcon htmlColor="red"/>}
                </Box>
                <Box sx={{lineHeight:1.5}}>
                    {data.title}
                </Box>
                </Box>
            }


          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
