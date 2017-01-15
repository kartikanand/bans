import React from 'react';

export default function Ban (props) {
    return (
        <div className='ban'>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
            {props.state}
            {props.category}
        </div>
    );
}
