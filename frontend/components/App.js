import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'//

const api_key = 'twx9kp8g5peMuMe3wPBatZ1HeEzGy9Gu15KXghNa'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
const StyledApp = Styled.div`
  margin-right: 10px;
  margin-left: 10px;
  .info {
    text-align: center;
    border: 1px solid grey;
    padding: 10px;
    margin-top: 20px;
    color: whitesmoke;
  };

  .image {
    border: 1px solid grey;
    text-align: center;
    color: whitesmoke;
    
  };

  h2 {
    margin: 8px;
  }


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
      <div className='image'>
        <h2>{apod.title}</h2>
        <img src={apod.hdurl} />
        <figcaption>Taken on {apod.date}</figcaption>
      </div>        
      <div className="info">
        <p>{apod.explanation}</p>
      </div>

    </StyledApp>
    
  )
}

export default App
