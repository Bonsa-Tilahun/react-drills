import React from 'react'
import ToDo from './Todo.component'

const List = (props)=>{
    let toDoList = props.toDoList.map((e, i)=> <ToDo key={i} task={e}/>)
    return (
        <div>
            {toDoList}
        </div>
    )
}

export default List