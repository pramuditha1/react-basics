import React from 'react'

function ErrorHandling({heroName}) {
    if (heroName === 'Joker') {
        throw new Error('Not found')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default ErrorHandling
