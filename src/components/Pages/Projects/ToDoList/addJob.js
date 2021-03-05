import React, { useState } from 'react';
import { BsArrow90DegUp } from 'react-icons/bs';
import './todolist.css';

const AddJob = (props) => {
    const initialFormState = { id: null, title: '',  editing: false, done: false  };
    const [task, setTask] = useState(initialFormState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask({ ...task, [name]: value });
    }

    return (
        <div className='addJobContainer h-100'>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (!task.title) return;
                    props.addtoList(task);
                    setTask(initialFormState);
                }}>
                <input className='inputBar'
                    type="text"
                    name="title"
                    value={task.title}
                    placeholder='Add Task..'
                    onChange={handleChange}
                />
                <button type="submit" ><BsArrow90DegUp size={20} /></button>
            </form>
        </div>
    )
}
export default AddJob;