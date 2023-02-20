import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import "./DataGrid.css";

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  {field: 'phone', headerName: 'Phone Number', width: 300},
];

/* const columns = [
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
    
    )
]
*/

/*
const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);
*/

const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', phone: '466-396-8031' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com', phone: '466-396-8031' },
  { id: 3, firstName: 'Bob', lastName: 'Smith', email: 'bobsmith@example.com', phone: '466-396-8031' },
  { id: 4, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', phone: '466-396-8031' },
  { id: 5, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com', phone: '466-396-8031' },
  { id: 6, firstName: 'Bob', lastName: 'Smith', email: 'bobsmith@example.com', phone: '466-396-8031' },
];

const AppleDatagrid = () => {
  return (
    <div style={{ height: 400, width: 1025 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterSelectedRowCount={true}
        disableColumnMenu={true}
        disableSelectionOnClick={true}
        checkboxSelection={true}
        density='standard'
      />
    </div>
  );
};

export default AppleDatagrid;
