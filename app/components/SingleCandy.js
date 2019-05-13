import React from 'react'
import {connect} from 'react-redux'

const SingleCandy = (props) => {
    const candy = props.candy;
    return (
        <div>
            <img src={candy.imageUrl} />
            <h3>{candy.name}</h3>
            <p>{candy.quantity}</p>
            <p>{candy.description}</p>
        </div>
    )
}

export default SingleCandy
