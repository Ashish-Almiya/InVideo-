import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggglemenu } from "../utils/appslice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Demo from './Demo';
import Button from './Button';


const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestion, setsuggestion] = useState([]);
  const[showsuggestion,setshowsuggestion] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      datasearchquery();
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const datasearchquery = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
     setsuggestion(json[1])
  };
  const disptch = useDispatch();

  const togglemenuhandler = () => {
    disptch(toggglemenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2  shadow-lg">
      <div className=" cursor-pointer flex gap-7 col-span-1">
        <img
          className="h-10"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAABLS0vPz8+Wlpb39/fFxcWQkJCmpqaCgoI4ODhiYmLr6+vh4eGxsbF0dHQbGxvX19cQEBCIiIh6enpXV1egoKC7u7tcXFxvb28ZGRl6p2Y9AAACVUlEQVR4nO3di04CMRCF4QrsglwE8e77P6jZqEGjmXZpk8mZ/t8TzMkuLS1DmxIAAAAAAAAAAAAAAAAAdGBc7xY6dutxXrz9442ex315wLV3sVdaF+Ybtt6VXm07FAU8e9dZ4VwSUfcJTrb5gLfeNVa6zQU8eFdY7ZBJuPMusNrODjh419eAPdjceZfXwJ2Z8OhdXgNHM6H2VPHJnjC8q2ui84Qn7+oaOJkJn7zLa+DJTKi6bvrJXkMtvctr4N5MGGGosQOmjXd91TaZhPKjqT2STu69S6yU+RTqv6fZd3Ty7F1lheeSgCmN3nVerXhbeNBcRB2L9hK/7Fdq66jtasaW99eDPCx1HOY8PgAAAAAAAAAAIGYYNysdm3HuDxcvC+/fkmZbvMzIt9RsVzgtSwPqNrNn29g/vXrXWeG1JOCbd5VV3vIB1Tu97S7vFKFZPzdtPHgXWO0hk9C7vgbsgLrNQhd225DuVHhhT4p6X9b+WpgJlf9d+e1sJvSuronOn2H8z2H8sTT+fBhhqLEDdvC9NP7aIv76sIM1fgf7NMqjTeFeWwf7pSn+nvck+u8WAAAAAAAAAABASPBzoqKf9RX+vDbdtqHCM/fCn5sY/uzL+OeXvnuXWCl7Bq32OzrJvafe9TVgB4x/nnf8M9njn6uv2e71mz2aelfXROcJ1dZM/7HvmdFcNv1m3xWk3uU9sTu99Vv1s8364e9d6+DuPPn/dhU0s2tPGAV3WKZBeQ1cdA9p/Ltkk+4aqvQ+4NTBnc6T4PdyAwAAAAAAAAAAAAAAAICmD8U+UWQoPgYYAAAAAElFTkSuQmCC"
          onClick={() => togglemenuhandler()}
        />

        <a href="/">
          <img
            className="h-10"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1200px-YouTube_full-color_icon_%282017%29.svg.png"
          />
        </a>
      </div>

      <div className="col-span-10">
        <div>
          <input
            type="text"
            className=" px-14 text-left w-1/2 ml-30 border py-1 border-gray-400 rounded-l-full"
            value={searchQuery}
            onChange={(e) => {
              setsearchQuery(e.target.value);
            }}
            onFocus={() => setshowsuggestion(true)}
            onBlur={() => setshowsuggestion(false)}
          />
          <button className=" border py-1 px-1  border-gray-400 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        {showsuggestion && (
          <div className="fixed bg-white py-2 px-3 w-[33.3rem] shadow-lg shadow-slate-500 rounded-lg border-gray-500">
            <ul>
              {showsuggestion &&
                suggestion.map((s) => (
                  <li key={s} className="py-2 px-2 shadow-sm hover:bg-gray-100">
                    🔍{s}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

    
      <div>
        {/* <Link to={"demo"}>demo</Link> */}
       </div>
        
      

      <div className="w-6 col-span-1">
        <img
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOm2LuId_WkIuaCpuGYldjjC1c_Zi134yRg&usqp=CAU"
        />
      </div>

      
    </div>
  );
};

export default Head;
