import React from 'react';
import './Button.css'; // Importing the CSS for styling

const Button = ({ text, onClick }) => {
    return (
        <button className="pretty-button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
