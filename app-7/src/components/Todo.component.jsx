import React from 'react'

const ToDo = (props) => {
    return <p key={props.key}>{props.task}</p>
}

export default ToDo