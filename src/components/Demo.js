import React, { useMemo, useState } from "react";
import { FindNthPrime } from "../utils/helper";

const Demo = () => {
  const [demo, setusedemo] = useState(0);
  const [isdarktheame, setisdarktheame] = useState(false);
  const prime = useMemo(() => FindNthPrime(demo), [demo]);
  let a  =10
  // const prime = () => FindNthPrime(demo);
  console.log(prime);
  return (
    <div
      className={
        "border border-black h-80 w-96 " +
        (isdarktheame && "bg-slate-800 text-red-700")
      }
    >
      <div>
        <input
          className="bg-gray-50"
          value={demo}
          type="number"
          onChange={(e) => {
            setusedemo(e.target.value);
            // console.log("rendering");
          }}
        />
      </div>
      <div>ntm prime:{prime}</div>

      <div>
        <button
          className="bg-green-600 text-white"
          // onClick={() => setisdarktheame(!isdarktheame)}
          onClick={() => {
            a = a + 1
          console.log(a)}}
          
        >
          {a}
      
        </button>
      </div>
    </div>
  );
};

export default Demo;
