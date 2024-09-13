import React from "react";

const Chatmessae = ({name,message}) => {
  return (
    <div className="pl-3 p-2 flex shadow-sm">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOm2LuId_WkIuaCpuGYldjjC1c_Zi134yRg&usqp=CAU"
        className="w-6  rounded-sm  bg-gray-50"
      />
      <span className="font-bold px-2">{name}:</span>
      <span>{message}</span>
    </div>
  );
};

export default Chatmessae;
