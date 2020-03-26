import React from 'react'
import './card.styles.css'
const Card = (props) => {
    return(
        <div className="card-container">
            <img alt="monster" src={'https://robohash.org/' + props.id + '?set=set2&size=180x180'}/>
            <h2> {props.item.name} </h2>
            <p> {props.item.email}</p>
        </div>
    )
}

export default Card