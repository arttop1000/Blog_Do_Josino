import React from 'react'
import { Link } from 'react-router-dom'


const Cadastro = () => {
    return (
        <div className='auth'>
            <h1>Cadastro</h1>
            <form>
                <input required type="text" placeholder='Escolha um usuário' />
                <input required type="email" placeholder='Email' />
                <input required type="password" placeholder='Senha' />
                <button>Entrar</button>
                <p>Dados Incorretos</p>
                <span>
                    Já é cadastrado?<Link to="/Login">Entrar</Link>
                </span>

            </form>
        </div>
    )
}

export default Cadastro