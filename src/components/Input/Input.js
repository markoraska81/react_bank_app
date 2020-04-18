import React, {Fragment} from 'react';
import './Input.scss';


const Input = ({type, name, placeholder, value, onInputChange}) => {
  return (
    <Fragment>
      <input type={type}
             name={name}
             placeholder={placeholder}
             value={value}
             onChange={e => onInputChange(e.target.value, name)}/>
    </Fragment>
  )
}



export {Input};
