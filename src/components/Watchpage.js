import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/appslice'
import { useSearchParams } from 'react-router-dom'
import Commentcontainer from './Commentcontainer'
import Livechat from "./Sidebarleft";
const Watchpage = () => {
    const [searchparam] = useSearchParams()
    console.log(searchparam.get("v"));
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closemenu())
    },[])
  return (
    <div className="flex w-full pt-4">
      <div className="px-3">
        <iframe
          className="rounded-lg"
          width="1000"
          height="600"
          src={"https://www.youtube.com/embed/" + searchparam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="ml-8 p-4 h-64">
          <Commentcontainer />
        </div>
      </div>

      <div>
        <Livechat/>
      </div>
    </div>
  );
}

export default Watchpage