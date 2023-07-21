import React from 'react'

function VideoCard(props) {
const info = props.info;
  return (
    <div className='shadow p-2 w-64 cursor-pointer'>
{/* {info.id} jjj */}

{/* 
<img className="p-2" alt=" thumbnail "  src={info.snippet.thumbnails.default.url} /> */}
<img className="w-64" alt = "ddd" src={info.snippet.thumbnails.default.url} />


    </div>
  )
}

export default VideoCard 