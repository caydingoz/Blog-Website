import React, { useState, useEffect } from 'react';
import { BsArrow90DegUp } from 'react-icons/bs';
import './todolist.css';

const UpdateJob = (props) => {
    const initialFormState = { id: props.task.id, title: '', editing: false, done: false };
    const [task, setTask] = useState(initialFormState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask({ ...task, [name]: value });
    }
    useEffect(() => {
        setTask(props.task)
    }, [props])

    return (
        <div className='updateJobContainer'>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (!task.title) return;
                    props.updateTask('title', task.id, task.title);
                    props.updateTask('editing', task.id, false);
                    setTask(initialFormState);
                }}>
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                />
                <button type="submit"><BsArrow90DegUp size={20} /></button>
            </form>
        </div>
    )
}
export default UpdateJob;