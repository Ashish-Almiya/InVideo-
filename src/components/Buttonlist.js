import React from 'react'
import Button from './Button'

const List = [
  "All",
  "Games",
  "Songs",
  "Bhajans",
  "Trailer",
  "Sports",
  "News",
  "Cricket",
  "Roadies",
  "Live",
  "Web",
  "Pravachan",
  "Story",
  "Tech",
  "Data",
  "React"
];

const Buttonlist = () => {
  //one way is this
  // return (
  //   <div className='flex gap-3'>

  //     <Button name="All"/>
  //     <Button name="Games"/>
  //     <Button name="Songs"/>
  //     <Button name="Bhajans"/>
  //     <Button name="Trailer"/>
  //     <Button name="Sports"/>
  //     <Button name="News"/>
  //     <Button name="Cricket"/>
    
  //   </div>
  // )


  // second way
  return <div className="flex gap-3">
    {List.map((el, index) => {
         return <Button  key={index} name={el}/>
       })}
  </div>;
}

export default Buttonlist