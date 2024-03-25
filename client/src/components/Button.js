import React from 'react';
import './Button.css'; 

const Button = ({ text, onClick }) => {
    return (
        <button className="pretty-button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
