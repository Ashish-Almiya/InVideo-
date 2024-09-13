import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Maincontainer from './Maincontainer';
import { Outlet } from 'react-router-dom';

// main body aap
const Body = () => {
  const[isdarktheme,setisdarktheme]=useState(false)
  return (
    <>
      <div className={"flex " + (isdarktheme && "bg-black text-white")}>
        <Sidebar />
        <Outlet />

        <div>
          <button className=" bg-green-600 text-white" onClick={ ()=>(setisdarktheme(!isdarktheme))}>Theme</button>
        </div>
      </div>
    </>
  );
}

export default Body