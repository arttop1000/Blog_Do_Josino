import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
                <div className='links'>
                    <Link className='link'><h6>Inicio</h6></Link>
                    <Link className='link'><h6>Serviços</h6></Link>
                    <Link className='link'> <h6>Meu Trabalho</h6></Link>
                    <Link className='link'> <h6>Contato</h6></Link>
                    <Link to="/blogJosino/src/routes/Blog.jsx" className='link'> <h6>Blog</h6></Link>
                    <span>Josino</span>
                    <span>Logout</span>
                    <h6>
                        <span className='write'>
                            <Link className='link' to="/Escrever">Escrever</Link>
                        </span>
                    </h6>

                </div>
            </div>
        </div>
    )
}

export default Navbar