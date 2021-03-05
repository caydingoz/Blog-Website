import React from 'react';
import { RiDeleteBin5Line, RiBallPenLine,RiArrowGoBackFill } from 'react-icons/ri';
import { MdDoneAll } from 'react-icons/md';
import UpdateJob from './updateJob';

const JobList = (props) => {
    return (
        <ul class={props.isMobile ? 'list-group list-group-flush mt-1' : 'list-group list-group-flush pl-4 mt-2'} style={{ width: '100%' }}>
            {props.tasklist.length > 0 ? (
                props.tasklist.map((task) => (
                    <li key={task.id} class={props.isMobile ? "list-group-item pl-1 pr-1": "list-group-item"}>
                        <button onClick={() => props.updateTask('editing', task.id, true)} type="button" class={props.isMobile ? "btn btn-success p-0" : "btn btn-success ml-1 p-0"} ><RiBallPenLine size={15} /></button>
                        <button onClick={() => props.deleteTask(task.id)} type="button" class="btn btn-danger ml-1 p-0"><RiDeleteBin5Line size={15} /></button>
                        {task.done ? <small class="text-muted pl-3"><del>{task.title}</del></small> : <small class="text-muted pl-3">{task.title}</small>}
                        {task.editing ? <div class='container position-absolute w-100' style={{ zIndex: '1' }}>
                            <UpdateJob task={task} updateTask={props.updateTask} />
                        </div> : null}
                        <button onClick={() => props.updateTask('done', task.id, true)} type="button" style={{float: 'right'}} class="btn btn-outline-success p-0">{task.done ? <RiArrowGoBackFill size={15} /> : <MdDoneAll size={15} />}</button>
                    </li>
                ))
            ) : (
                    <li key='0' class="list-group-item">
                        <small class="text-muted pl-3">Add a task to do</small>
                    </li>
                )}
        </ul>
    )
}
export default JobList;