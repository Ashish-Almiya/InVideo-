import React from 'react'

const Videocard = ({ info }) => {
    if (!info) {
        return <h1>...loading</h1>
    }
    
    console.log(info);
    const { snippet, statistics } = info
    const { channelTitle, title, thumbnails } = snippet;
    
  return (
    <div className='p-2 m-2 w-56    shadow-lg'>
      <img  className="rounded-lg" src={thumbnails.medium.url} alt="thunbnails" />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li className='font-semibold'>{channelTitle}</li>
        <li className='font-semibold'>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}


export const Addvideocard = ({info}) => {
  return (
    <div className='border border-red-700'>
      <Videocard info={info}/>
    </div>
  );
}

export default Videocard