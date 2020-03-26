import React from 'react'

const NewTask =(props) => {
        return(
            <div>
                <input placeholder="To do item" value={props.inputVal} type="text" onChange={props.changeVal}/>
                <button onClick={props.add}>Add</button>
            </div>
        )
}

export default NewTask