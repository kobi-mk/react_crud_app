import React ,{useEffect,useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DetailPopup from '../../components/DetailPopup';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ActionMenu from './ActionMenu';

export default function TodoTable() {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = async (search) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    if (response.ok) {
        const todos = await response.json()
        setRows(todos)
      } else {
        setRows([])
      }
  };
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAction = (actionType,row) => {
    switch (actionType) {
      case "view":
        handleViewAction(row)
        break;
      case "deactivate":
        handleDeactivateAction(row)
        break;
      case "delete":
        handleDeleteAction(row)
        break;
    
      default:
        break;
    }
  }

  const handleViewAction = (row) => {
    console.log("row view",row);
    setSelectedId(row.id)
  }

  const handleDeactivateAction = (row) => {
    console.log("row deactivate",row);
  }

  const handleDeleteAction = (row) => {
    console.log("row delete",row);
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                    #
                </TableCell>
                <TableCell>
                    Question
                </TableCell>
                <TableCell>
                    Category
                </TableCell>
                <TableCell>
                    Status
                </TableCell>
                <TableCell>
                    Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.id}>
                    <TableCell>
                        {row.id}
                    </TableCell>
                    <TableCell>
                        {row.id}
                    </TableCell>
                    <TableCell>
                        {row.title}
                    </TableCell>
                    <TableCell>
                        {row.completed ? <CheckIcon htmlColor="green" /> : <ClearIcon htmlColor="red"/>}
                    </TableCell>
                    <TableCell>
                        <ActionMenu row={row} handleAction={handleAction} />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {selectedId && <DetailPopup setSelectedId={setSelectedId} selectedId={selectedId} />}
    </Paper>
  );
}
