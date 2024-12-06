import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './BasicNavbar.css'
import useFetch from '../../hooks/useFetch'


const BasicNavbar = () => {
    const { data, loading } = useFetch('globals/header?depth=0')

    return (
        <>
            {!loading ?
                (
                    <>
                        <Navbar className='navbar-container'>
                            <Navbar.Brand className='logo' href='/'>
                                <img src='images/chef-hat-logo.jpg' alt='contato' />
                            </Navbar.Brand>
                            <div className='options'>
                                <Nav className='nav'>
                                    {data?.navItems.map((navlink, index) => (
                                        <Nav.Link key={index} className='nav-link' href={navlink.link.url}>{navlink.link.label}</Nav.Link>
                                    ))}
                                </Nav>
                                <div className='number'>
                                    <img src='images/phone-icon.png' alt='contato' />
                                    <h5 className='mb-0'>(41)3333-3333</h5>
                                </div>
                            </div>
                        </Navbar >
                    </>
                )
                : ('')}
        </>
    )
}

export default BasicNavbar