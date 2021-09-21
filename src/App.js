import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState([]);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#FF8C29').all(10))

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error, 'we have error')
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} onChange={(e) => {
            setColor(e.target.value);
          }} placeholder='#f15025' 
          className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>submit</button>
        </form>
      </section>
      <section className='colors'>
          {
            list.map((colors, index) => {
              return (
                <SingleColor key={index} {...colors} index={index} />
              )
            })
          }
      </section>
    </>
  )
}

export default App
