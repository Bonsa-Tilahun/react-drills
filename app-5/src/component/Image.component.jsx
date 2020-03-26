import React from 'react'
import './image.component.css'

const Image = (props) => {
    return (
        <div className="container">
            <div className="image-container">
                <img className="imageSentIn" src={props.imgUrl} alt="img sent in"/>
            </div>
            <h1>409</h1>
            <h3>Conflict</h3>
        </div>
    )
}

export default Image