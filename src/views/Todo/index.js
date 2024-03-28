import React ,{useState} from 'react';
import { Box, Button, Container } from '@mui/material';
import Header from '../../components/Header';
import SearchInput from './SearchInput';
import TodoTable from './TodoTable';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreateQuestionPopup from '../../components/CreateQuestionPopup';

export default function Todo() {

    const [newQuestionPopup, setNewQuestionPopup] = useState(false);

    const handleSearch = (searchKey) => {
      if(searchKey){
        console.log("searchKey",searchKey);
      }
    }

    return (
      <Box>
          {/* <Header /> */}
          <Container>
            <Box sx={{marginTop:3,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <Box>
                FAQ Manager - iLabs
              </Box>
              <Box>
                <Button variant="outlined" startIcon={<AddCircleIcon />} onClick={()=>setNewQuestionPopup(true)} size="small" >
                  Add New Question
                </Button>
              </Box>
            </Box>
            <Box sx={{marginTop:3}}>
              <SearchInput handleSearch={handleSearch} />
            </Box>
            <Box sx={{marginTop:3}}>
              <TodoTable />
            </Box>

          </Container>
          {newQuestionPopup && <CreateQuestionPopup setNewQuestionPopup={setNewQuestionPopup} />}
      </Box>
    );
  }