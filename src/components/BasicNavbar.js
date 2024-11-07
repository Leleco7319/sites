import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './BasicNavbar.css'

const BasicNavbar = () => {
    return (
        <div className='header'>
            <Navbar className='navbar-container'>
                <Navbar.Brand className='logo' href='/'>
                <img src='chef-hat-logo.png' alt='contato'/>
                </Navbar.Brand>
                <Nav className='nav'>
                    <Nav.Link className='nav-link' href='about'>Quem Somos</Nav.Link>
                    <Nav.Link className='nav-link' href='projects'>Projetos</Nav.Link>
                    <Nav.Link className='nav-link' href='news'>novidades & eventos</Nav.Link>
                    <Nav.Link className='nav-link' href='contact'>contatos</Nav.Link>
                </Nav>
                <div className='number'>
                <img className='size-6' src='phone-icon.png' alt='contato'/>
                    <h5 className='mb-0'>(41)3333-3333</h5>
                </div>
            </Navbar >
        </div>
    )
}

export default BasicNavbar