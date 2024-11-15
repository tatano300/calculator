import React from 'react';
import '../stylesheets/Button.css';

function Button(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  // Assicurati che `props.children` sia sempre una stringa
  const buttonClass = `button-container ${esOperador(props.children) ? 'operador' : ''}`.trim();

  return (
    <div className={typeof buttonClass === 'string' ? buttonClass : 'button-container'} onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;
