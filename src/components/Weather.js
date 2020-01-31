import React from 'react'


const Weather = props => (
  <div  className='weather__info'>
    {
      props.city && props.country && <p className='weather__key'>Location:
        <span className='weather__value'> { props.city } { props.country }</span>
      </p>
    }
    {
      props.temperature && <p className='weather__key'>Temperature:
        <span className='weather__value'> { Math.floor(props.temperature * 9/5 + 32) }&#8457;</span>
      </p>
    }
    {
      props.humidity && <p className='weather__key'>Humidity:
        <span className='weather__value'> { props.humidity }&#37;</span>
      </p>
    }
    {
      props.description && <p className='weather__key'>Conditions:
        <span className='weather__value'> { props.description }</span>
      </p>
    }
    {
      props.error && <p className='weather__error'>{ props.error }</p>
    }
  </div>
)

export default Weather

// Since we are only returning one thing explicitly & 1 param
// - remove return and curly braces
// - remove () from param
