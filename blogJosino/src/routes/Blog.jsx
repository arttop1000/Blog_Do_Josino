import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
    const post = [
        {
            id: 1,
            title: "lorem",
            desc: "bala aguda",
            img: "../img/logotipo-ednea-1.png",
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
                            <Link to={`/post/${post.id}`}>
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