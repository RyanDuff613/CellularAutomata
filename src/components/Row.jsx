import {useState, useEffect} from 'react';
import Cell from './Cell';

function Row() {
  const [rowValues, setRowValues] = useState([0,0,0,0,0])
  useEffect(()=>{
    setRowValues([0,0,1,0,0])
  }, [])
  return (
    <>
      {rowValues.map((cellValue, index) =>
        <Cell key={index} on={cellValue}/>
      )}
    </>
  )
}

export default Row;
