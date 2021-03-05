import React from 'react'
import { ListGroup} from 'reactstrap'
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import Calculator from "./Projects/Calculator/calculatorPage";
import TodoList from "./Projects/ToDoList/todolistPage";
import Weather from "./Projects/Weather/weatherPage";
import { FcCalendar, FcCalculator, FcOvertime } from 'react-icons/fc';
import './Css/projectsPage.css';


function ProjectsPage() {
    let isMobile = window.innerWidth < 900;
    const bgColor = { 
        background: 'rgb(148, 146, 146)'
    }
    let { path, url } = useRouteMatch();
    return (
        <div class={isMobile ? 'container pt-4' : 'container pt-5'} style={{ fontFamily: "'Times New Roman', Times, serif"}}>
            <div class={isMobile ? 'row ml-2 pl-2' : 'row'}>
                <h5 class='menuHeader' style={{ color: 'white', fontFamily: 'Jura' }}>Projects</h5>
            </div >
            <div class="row ml-2 pt-3">
                <div class="col-4">
                    <ListGroup >
                        <NavLink className={isMobile ? 'x mb-1 pl-1' : 'x my-2 pl-4'} type='button' activeStyle={bgColor} to={`${url}/calculator`}><FcCalculator className={isMobile ? 'mb-1 mr-1' : 'mb-1 mr-2'} />Calculator</NavLink>
                        <NavLink className={isMobile ? 'x mb-1 pl-1' : 'x my-2 pl-4'} type='button' activeStyle={bgColor} to={`${url}/todolist`}><FcOvertime className={isMobile ? 'mb-1 mr-1' : 'mb-1 mr-2'} />To-Do List</NavLink>
                        <NavLink className={isMobile ? 'x pl-1' : 'x my-2 pl-4'} type='button' activeStyle={bgColor} to={`${url}/weather`}><FcCalendar className={isMobile ? 'mb-1 mr-1' : 'mb-1 mr-2'} />Weather API</NavLink>
                    </ListGroup>
                </div>
                <div class="col-8 px-0">
                    <div class='container'>
                        <Switch>
                            <Route exact path={path}>
                                <h5 class={isMobile ? 'text-muted small' : 'text-muted'}>Please select a project.</h5>
                            </Route>
                            <Route path={`${path}/calculator`}>
                                <Calculator />
                            </Route>
                            <Route path={`${path}/todolist`}>
                                <TodoList />
                            </Route>
                            <Route path={`${path}/weather`}>
                                <Weather />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default ProjectsPage;
