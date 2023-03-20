import './index.scss'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Inicio from './routes/Inicio'
import Contato from './routes/Contato'
import MeuTrabalho from './routes/MeuTrabalho'
import Servicos from './routes/Servicos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom"
import Single from './routes/Single'
import Login from './routes/Login'
import Cadastro from './routes/Cadastro'
import './App.scss'



const Layout = () => {
  return (

    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>

  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/Contato",
        element: <Contato />
      },
      {
        path: "/Cadastro",
        element: <Cadastro />
      },
      {
        path: "/MeuTrabalho",
        element: <MeuTrabalho />
      },
      {
        path: "/Servicos",
        element: <Servicos />
      },

    ]


  },
])

function App() {

  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />

      </div>
    </div>
  )
}

//https://www.youtube.com/watch?v=0aPLk2e2Z3g&ab_channel=LamaDev

export default App
