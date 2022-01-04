import React from 'react'

function ComponentChild(props) {
    console.log(props)
    return (
        <div>
            <button onClick={props.greetParent}>Greet parent</button>
        </div>
    )
}

export default ComponentChild