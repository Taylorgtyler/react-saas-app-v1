import {React, useState, useEffect} from 'react';
import { ResponsivePie } from '@nivo/pie';
import axios from 'axios';

export default function PieChart({ data }) {
    const [PieData, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setData(response.PieData))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ height: '400px' }}>
      <ResponsivePie
        data={PieData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableRadialLabels={false}
        enableSliceLabels={true}
        sliceLabel="value"
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
      />
    </div>
  );
}