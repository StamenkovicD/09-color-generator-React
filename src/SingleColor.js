import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index}) => {
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb)

  const [alert, setAlert] = useState(false);
  if (alert) {
    setTimeout(() => {
      setAlert(false)
    }, 1500);
  };

  return (
    <article className={`color`} style={{backgroundColor: `rgb(${bcg})`}} onClick={() => {
      setAlert(true);
      navigator.clipboard.writeText(hex)
    }}>
      <div className={`${index >= 8 ? 'color-light' : null }`}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'> {hex} </p>
        { alert && <p className='alert'>copied to clipboard</p>}
      </div>
    </article>
  )
}

export default SingleColor
