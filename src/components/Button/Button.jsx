import React from 'react';
import './Button.scss';

export const Button = ({ text, size, theme, action }) => {
  return (
    <button
      className={`button ${size} ${theme}`}
      onClick={action}
    >
      {text}
    </button>
  );
};
