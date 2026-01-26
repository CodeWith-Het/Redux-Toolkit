import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {
  return (
    <div>
      <button onClick={()=>[
        fetchPhotos('cat')
      ]}>Get Data</button>
    </div>
  )
}

export default App
