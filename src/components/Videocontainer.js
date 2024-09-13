import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constant";
import Videocard, { Addvideocard } from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap justify-evenly">
      <Addvideocard info={videos[40]}/>
      {videos.map((el) => (
        <Link to={"/watch?v=" + el.id} key={el.id}>
          <Videocard info={el} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
