import React from 'react'
import { fetchPhotos } from './api/mediaApi'
import {fetchVideos} from './api/mediaApi'

const App = () => {
  return (
    <div>
      <button onClick={async ()=>{
        const photosData = await fetchPhotos('dog')

        const videoData = await fetchVideos("dog")

        console.log(photosData)
        console.log(videoData)
      }}>Get Data</button>
    </div>
  )
}

export default App
