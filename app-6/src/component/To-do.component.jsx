import React from 'react'

const ToDo = (props) =>{
    return <p key={props.key}>{props.todo}</p>
}

export default ToDo