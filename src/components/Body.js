import React from 'react'
import VideoContainer from './VideoContainer'
import SideNav from './SideNav'

function Body() {
  return (
    <div className='grid grid-cols-12'>
        <SideNav/>
        <VideoContainer/>
    </div>
  )
}

export default Body