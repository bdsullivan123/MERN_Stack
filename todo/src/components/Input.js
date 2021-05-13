import React from 'react'

const Input = props => {
    const { list, setList } = props;

    let task = {
        name: "",
        isComplete: false
    };

    const onChange = (e) => {
        task.name = e.target.value;
    };

    const onClick = (e) => {
        setList([...list, task]);
        e.target.value = "";
    };

    return (
        <div>
            <input onChange={onChange} type="text" name="task"/>
            <button onClick={onClick}>Add Task</button>
        </div>
    )
}

export default Input
