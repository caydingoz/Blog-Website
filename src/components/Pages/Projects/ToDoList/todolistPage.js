import React, { useState } from 'react';
import './todolist.css';
import { CgPlayListAdd, CgPlayListRemove } from 'react-icons/cg';
import JobList from './jobList';
import AddJob from './addJob';

function TodolistPage() {
    let isMobile = window.innerWidth < 900;
    const taskList = [
        { id: 1, title: 'Walk the dog', editing: false, done: false  },
        { id: 2, title: 'Draw a painting', editing: false, done: false  }
    ]
    const [tasklist, setList] = useState(taskList);
    const [isToggle, setToggle] = useState(false);

    const updateTask = (mode, id, value) => {
        let tempArr = [...tasklist];
        switch (mode) {
            case 'editing':
                tempArr.map((task) => { if (task.id === id) task.editing = !task.editing })
                break;
            case 'title':
                tempArr.map((task) => { if (task.id === id) task.title = value })
                break;
            case 'done':
                tempArr.map((task) => { if (task.id === id) task.done = !task.done })
                break;
            default:
                break;
        }
        setList(tempArr);
    }
    const addtoList = (task) => {
        let lastId = tasklist[tasklist.length - 1].id;
        task.id = lastId + 1;
        setList([...tasklist, task]);
    }
    const deleteTask = (id) => {
        setList(tasklist.filter((task) => task.id !== id))
    }
    const handleClick = (event) => {
        event.preventDefault();
        setToggle(!isToggle);
    }

    return (
        <div class='todoContainer row position-relative'>
            <div class={isMobile ? 'container p-0' : 'container'}>
                <div class={isMobile ? 'row ml-2 mt-2' : 'row ml-3 mt-3'}><strong style={{ fontSize: isMobile ? '16px' : '20px', color: 'gray' }}>To Do List</strong></div>
                <JobList tasklist={tasklist} deleteTask={deleteTask} updateTask={updateTask} isMobile={isMobile}/>
            </div>
            <div class="addTaskContainer" style={{ width: isToggle ? '' : '60px' }}>
                {isToggle ? <AddJob addtoList={addtoList} /> : null}
                <button onClick={(event) => handleClick(event)} type="button" class="btn rounded-circle">{isToggle ? <CgPlayListRemove size={30} /> : <CgPlayListAdd size={30} />}</button>
            </div>
        </div>
    )
}
export default TodolistPage;