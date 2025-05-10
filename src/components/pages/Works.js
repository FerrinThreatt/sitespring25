import * as React from 'react';
import { Link } from 'react-router-dom';
import sfpcscan1 from '../../scan1sfpc.jpeg';
import sfpcscan2 from '../../scan2sfpc.jpeg';

function Works() {
  return (
    <>
    <p>press back button, no navbar yet ☹</p>
        <img src={sfpcscan1} className="sfpc" alt="logo" />
        <img src={sfpcscan2} className="sfpc" alt="logo" />

    </>
  );
}


export default Works