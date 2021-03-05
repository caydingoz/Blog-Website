import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { Link } from "react-router-dom";
import "./navbar.css";

export default class navbar extends Component {
    render() {
        let isMobile = window.innerWidth < 900;
        return (
            <div className="Navbar" style={{backgroundColor: 'rgb(236, 236, 236)' }}>
                <Navbar className={isMobile ? '' : 'py-4'} light expand="md">
                    <NavbarBrand style={{ fontFamily: 'Jura' }} ><Link className={isMobile ? 'header' : 'header ml-5'} to="/">CAYDINGOZ</Link></NavbarBrand>
                    <Nav className={isMobile ? '' : 'ml-auto mr-5'} navbar>
                        <NavItem>
                            <NavLink className='Item'><Link className='Item2' to="/projects/calculator">Projects</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='Item' href="https://github.com/caydingoz">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='Item'><Link className='Item2' to="/about">About</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}