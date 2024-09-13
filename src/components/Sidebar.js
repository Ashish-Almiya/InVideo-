import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  const isMenuOpen= useSelector((store) => store.app.isMenuOpen);

  //early return 
  if (!isMenuOpen) return null;
  
  return (
    <div className="p-3 pr-14 shadow-lg">
      <ul className="font-medium"> 
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">subscription</h1>
      <ul className="font-medium">
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="font-medium">
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
}

export default Sidebar