import React from 'react'

const ColorOption = ({color}) => {
  return (
    <option value={color} className={"color-"+color}>{color}</option>
  )
}

export default ColorOption
