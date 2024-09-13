import React, { useEffect, useState } from "react";
import Chatmessae from "./Chatmessae";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatslice";
import { generateRandomnumber, randommessage } from "../utils/helper";

const Livechat = () => {
  const dispatch = useDispatch();
  const [livemessage, setlivemessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const t = setInterval(() => {
      //api poling

      dispatch(
        addmessage({
          name: generateRandomnumber(),
          message: randommessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(t);
  }, []);

  return (
    <>
      <h1 className=" w-[406px] h-10 text-left pt-2 pl-3 bg-black text-white rounded-t-lg">
        Top chat
      </h1>

      <div className="w-full h-[500px] bg-gray-50 border border-gray-300 rounded-lg m-1 overflow-y-scroll  flex flex-col-reverse">
        {chatMessages.map((el, index) => (
          <Chatmessae key={index} name={el.name} message={el.message} />
        ))}
      </div>

      <form
        className=" w-full p-2 ml-2 border border-black "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addmessage({
              name: "akshay",
              message:livemessage
            })
          )
          setlivemessage("")
        }}
      >
        <input
          className="w-[300px] pl-2"
          type="text"
          value={livemessage} 
          onChange={(e) => {
            setlivemessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-200 font-bold rounded-md">
          Send
        </button>
      </form>
    </>
  );
};

export default Livechat;
