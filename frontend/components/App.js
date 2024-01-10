import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {

  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    fetchPhoto()
  }, [])

  if (!apod) return "Loading"
  return (
    <>
      <div>
        <h2>{apod.title}</h2>
      </div>
      <div>
        <p>{apod.explanation}</p>
      </div>
      <div className='image'>
        <img src={apod.hdurl} />
        <figcaption>Taken on {apod.date}</figcaption>
      </div>
    </>
    
  )
}

export default App
