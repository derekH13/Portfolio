import React from "react";
import './Projetos.css'
import { motion, useScroll } from 'framer-motion'

type Props = {
    img: string;
    title: string;
    descricao: string;
    frameworks: string[];
    link: string;
    github: string;
    flex: string;
}

function Projetos({img, title, descricao, frameworks, link, github, flex}: Props ){
    return(
        <motion.div
        initial={{ opacity: 0, scale: .6 }}
        whileInView={{ opacity: 1,  scale: 1  }}
        transition={{ ease: "easeOut", duration: .8 }}

        className="container-projeto interface"
         >

            <div className="mobille-title">
                <h1>{title}</h1>
            </div>

            <div className="projetos-card">
                <img src={img} alt="" />

                <div className="container-descrição">
                    <p>
                    {descricao}
                    </p>
                </div>

                <div className="projetos-descrição">

                    <div className="container-descrição2">
                    <h3>Projeto Destaque</h3>
                    <h1>{title}</h1>

                        <p>
                            {descricao}
                        </p>
                    </div>

                    <div className="frameworks">
                        {
                            frameworks.map((item) => <span className={`${item}`}>{item}</span>)
                        }
                    </div>


                    <a className="git" href={github}>
                    <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                    </svg>

                    </a>

                    <a className="link" href={link}>
                    <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
                    </svg>

                    </a>

                </div>
            </div>
        </motion.div>
    )
}

export default Projetos