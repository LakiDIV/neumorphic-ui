import React from 'react';
import './InputField.css';

function InputField({ placeholder, type = 'text' }) {
  return (
    <input
      placeholder={placeholder}
      className="light-concave input-field"
      type={type}
    />
  );
}

export default InputField;