import React from 'react';
import '../App.css';

const Task = props => {
    const { task, index, list, setList } = props;

    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        })
    };

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    return (
        <div>
            {task.isComplete ?
                <label id="isComplete">{task.name}</label> :
                <label>{task.name}</label>
            }
            <div>
                <input onChange={onChange} type="checkbox" checked={task.isComplete} />
                <button onClick={onClick}>X</button>
            </div>
        </div>
    )
}

export default Task;
