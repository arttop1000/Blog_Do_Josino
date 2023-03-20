import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
    const post = [
        {
            id: 1,
            title: "Título do Artigo",
            desc: "Tema e resumo com uma chamada que leve a pessoa a clicar para ler mais. Nesta parte coloca-se geralmente a introdução ou resumo inicial do artigo...",
            img: "../img/download.png",
        },
        {
            id: 2,
            title: "Título do Artigo",
            desc: "Tema e resumo com uma chamada que leve a pessoa a clicar para ler mais. Nesta parte coloca-se geralmente a introdução ou resumo inicial do artigo...",
            img: "../img/download.png",
        },
        {
            id: 3,
            title: "Título do Artigo",
            desc: "Tema e resumo com uma chamada que leve a pessoa a clicar para ler mais. Nesta parte coloca-se geralmente a introdução ou resumo inicial do artigo...",
            img: "../img/download.png",
        },
        {
            id: 4,
            title: "Título do Artigo",
            desc: "Tema e resumo com uma chamada que leve a pessoa a clicar para ler mais. Nesta parte coloca-se geralmente a introdução ou resumo inicial do artigo...",
            img: "../img/download.png",
        },
        {
            id: 5,
            title: "Título do Artigo",
            desc: "Tema e resumo com uma chamada que leve a pessoa a clicar para ler mais. Nesta parte coloca-se geralmente a introdução ou resumo inicial do artigo...",
            img: "../img/download.png",
        },
        {
            id: 6,
            title: "Título do Artigo",
            desc: "Tema e resumo com uma chamada que leve a pessoa a clicar para ler mais. Nesta parte coloca-se geralmente a introdução ou resumo inicial do artigo...",
            img: "../img/download.png",
        },
        {
            id: 7,
            title: "Título do Artigo",
            desc: "Tema e resumo com uma chamada que leve a pessoa a clicar para ler mais. Nesta parte coloca-se geralmente a introdução ou resumo inicial do artigo...",
            img: "../img/download.png",
        },
        {
            id: 8,
            title: "Título do Artigo",
            desc: "Tema e resumo com uma chamada que leve a pessoa a clicar para ler mais. Nesta parte coloca-se geralmente a introdução ou resumo inicial do artigo...",
            img: "../img/download.png",
        },
        {
            id: 9,
            title: "Título do Artigo",
            desc: "Tema e resumo com uma chamada que leve a pessoa a clicar para ler mais. Nesta parte coloca-se geralmente a introdução ou resumo inicial do artigo...",
            img: "../img/download.png",
        },
        {
            id: 10,
            title: "Título do Artigo",
            desc: "Tema e resumo com uma chamada que leve a pessoa a clicar para ler mais. Nesta parte coloca-se geralmente a introdução ou resumo inicial do artigo...",
            img: "../img/download.png",
        },


    ]
    return (
        <div className='home'>
            <div className='posts'>
                {post.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />

                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                                <button>Leia Mais</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Inicio