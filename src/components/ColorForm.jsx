import React, { useState } from 'react';

const ColorForm = (props) => {
    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor( color );
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Color</h2>
            <textarea
                rows = "4"
                cols = "20"
                placeholder = "..."
                onChange={ (e) => setColor(e.target.value)}
                value={ color } 
            ></textarea>
            <input type="submit" value="Choose Color" />
        </form>
    );
};

export default ColorForm;