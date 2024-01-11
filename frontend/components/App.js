import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'

const api_key = 'twx9kp8g5peMuMe3wPBatZ1HeEzGy9Gu15KXghNa'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
const StyledApp = Styled.div`

  width: 88%;

  .info {
    text-align: center;
    border: 1px solid grey;
    padding: 10px;
    color: white;
    margin-bottom: 20px;
  };

  .image {
    border: 1px solid grey;
    color: white;
  };


`

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
    <StyledApp>
        <div className="info">
          <h2>{apod.title}</h2>
          <p>{apod.explanation}</p>
        </div>
      <div className='image'>
        <img src={apod.hdurl} />
        <figcaption>Taken on {apod.date}</figcaption>
      </div>
    </StyledApp>
    
  )
}

export default App
