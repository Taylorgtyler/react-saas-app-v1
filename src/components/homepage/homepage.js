import { useState, useEffect } from "react";
import {dataTable} from "./dataTable";

export function Homepage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos.json')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []);

    return (
        <div className="App">
            <dataTable data={data} />
        </div>
    );


}