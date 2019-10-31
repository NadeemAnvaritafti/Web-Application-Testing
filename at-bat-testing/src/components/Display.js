import React from 'react';

const Display = (props) => {

    return (
        <div className='display' data-testid='displayDiv'>
            <div className='hits'>
                <h3>Hits: <span>{props.hit}</span></h3>
            </div>
            <div className='strikesandballs'>
                <div className='strikes'>
                    <h3>Strikes: <span>{props.strike}</span></h3>
                </div>
                <div className='balls'>
                    <h3>Balls: <span>{props.ball}</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Display;