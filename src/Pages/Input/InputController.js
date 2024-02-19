import React from 'react';
import '../Input/InputController.css';

function InputController(props) {
  return (
    <div className='input-container'>
      {props.label && <label>{props.label}</label>}
      <input type='text' {...props} />
    </div>
  );
}

export default InputController;
