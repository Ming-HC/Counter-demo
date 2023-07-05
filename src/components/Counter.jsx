import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Counter() {
  const [countdata, setCountData] = useState({ count: 0, flag: 1 });

  const addcount = () => {
    if (countdata.flag) {
      const newcountdata = { ...countdata };
      newcountdata.count++;
      setCountData(newcountdata);
    }
  }
  const clearcount = () => {
    const newcountdata = { ...countdata };
    newcountdata.count = 0;
    setCountData(newcountdata);
  }
  const disablecount = () => {
    const newcountdata = { ...countdata };
    newcountdata.flag = !newcountdata.flag;
    setCountData(newcountdata);
  }

  const buttons = [
    <Button key="counter" onClick={addcount} sx={{ fontWeight: 'bold' }} disabled={!countdata.flag}>click:{countdata.count}</Button>,
    <Button key="clear" onClick={clearcount} sx={{ fontWeight: 'bold' }}>clear</Button>,
    <Button key="disable" onClick={disablecount} sx={{ fontWeight: 'bold' }}>{countdata.flag? 'disable' : 'able'}</Button>,
  ];


  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group">
      {buttons}
    </ButtonGroup>
  );
}