import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder='Usuário' />
                <input required type="password" placeholder='Senha' />
                <button>Entrar</button>
                <p>Dados Incorretos</p>
                <span>
                    Ainda não é cadastrado?<Link to="/Cadastro">Cadastrar</Link>
                </span>

            </form>
        </div>
    )
}

export default Login