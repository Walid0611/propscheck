import React from 'react'
import PropTypes from 'prop-types';



const ClassProfile = ({name,children}) => {
    
  return (
    <div>
        <h1>{name}</h1>
        {children}
    </div>

  )
}

ClassProfile.defaultProps ={
    name: 'nothing to say or add'
}



ClassProfile.propTypes ={
name:PropTypes.string, 
age:PropTypes.number

}



export default ClassProfile