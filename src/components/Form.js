import React from 'react'

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input
      type='text'
      name='city'
      placeholder='City...'
    / >
    <input
      type='text'
      name='country'
      placeholder='Country...'
    />
    <button>Get Weather</button>
  </form>
)

export default Form


// Since we are only returning one thing explicitly & 1 param
// - remove return and curly braces
// - remove () from param
