import { Table } from 'react-bootstrap';

function dataTable(props) {
  const { data } = props;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
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

export default dataTable;