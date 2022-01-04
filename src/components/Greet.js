import React from 'react';

//es6 arrow function
export const Greet = (props) => {  
    const { personName, message } = props
    return (
        <div>
            <h1>Hello {personName} {message}</h1>
            {props.children}
        </div>
    )
}