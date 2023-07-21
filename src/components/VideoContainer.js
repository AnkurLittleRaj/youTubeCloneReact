import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
 import ButtonFunc from './ButtonFunc'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';



 

function VideoContainer() {

  const [videoList,setVideoList]=useState([]);
  useEffect(()=>{

    getVideoList();
  },[])

  const  getVideoList = async () =>{

    const data = await fetch(YOUTUBE_VIDEOS_API);

    const json = await data.json();

    console.log("data",json)
let filterredArray =[];
    for(let i=0;i<json["items"].length;i++){
      filterredArray.push(json["items"][i])
  
    }
    setVideoList(filterredArray)
  }
  return (
    <div className='col-span-11 p-2'>
      {/* <div className='grid grid-cols-12'> */}
 <div className=' flex justify-between'>
<ButtonFunc name='Sports'/>
<ButtonFunc name='Mr Beast'/>
<ButtonFunc name='Chill'/>
<ButtonFunc name='Music'/>
<ButtonFunc name='Sports'/>
<ButtonFunc name='Sports'/>
</div>
<div className='flex  p-2 flex-wrap'>
  
  {videoList.map((res)=>{
    return (

    <VideoCard info={res} key={res.id}/>
    )
  })}
  
      </div>
      </div>
      
    // </div>
  )
}

export default VideoContainer