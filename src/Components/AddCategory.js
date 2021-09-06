import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategoria } ) => {

    const [input, setInput] = useState('');

    const inputChange = (e) => {
        setInput(e.target.value);
    }

    const inputSubmit = (e) => {
        e.preventDefault();
        if(input.trim().length > 2 ){
            setCategoria(cats => [input, ...cats]);
            setInput("");
        }
    }

    return (
        <form onSubmit={ inputSubmit }>
            <h2>Add Category</h2>
            <input 
                type="text"
                value={ input }
                onChange= { inputChange }  
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategoria : PropTypes.func.isRequired
}

