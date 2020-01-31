import React from 'react'

const Titles = props => (
  <div>
    <h1 className='title-container__title'>Weather Finder</h1>
    <h3 className='title-container__subtitle'>Find out temperature, conditions and more...</h3>
  </div>
)

export default Titles


// Since we are only returning one thing explicitly & 1 param
// - remove return and curly braces
// - remove () from param
