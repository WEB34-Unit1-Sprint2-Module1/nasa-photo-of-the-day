import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Explanation from './Explanation';


function DayPhoto() {

  const [photo, setPhoto] = useState('')

  useEffect(() => {

    axios.get('https://api.nasa.gov/planetary/apod?api_key=dA0WZJwegrMiHJToOmY4zEyPnrZUojzwJfGVaPXY&date=2012-03-14').then(response => {
      console.log(response.data);
      setPhoto(response.data)
    })
  }, [])
  

  return (
    <div>
      <img src={photo.url}/>
      <Explanation photoProp={photo} />
    </div>
  )
}

export default DayPhoto;