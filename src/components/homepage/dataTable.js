import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import "./datatable.css"

export default function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Table striped className='DataTable'>
      <thead className='thead-dark'>
        <tr>
          <th className='th-light'>User ID</th>
          <th className='th-light'>Task ID</th>
          <th className='th-light'>Title</th>
          <th className='th-light'>Completed</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.userId}</td>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.completed.toString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}