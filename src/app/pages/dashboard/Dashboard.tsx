import { Link } from 'react-router-dom'
import Provider from '../../shared/contexts/Provider'
import { motion, useScroll } from 'framer-motion'

import './Dashboard.css'
import icon1 from '../../../../public/assets/portfolio/icon (1).svg'
import Carousel from '../../shared/componentes/Carousel/Carousel'
import Projetos from '../../shared/componentes/Projetos/Projetos'
import Nav from '../../shared/componentes/Nav/Nav'


//aqui é uma pagina
export const Dashboard = () => {

const projetosArray = [
    {
        img: './assets/portfolio/projetos/pokemon-1.png',
        title: 'POKEAPI',
        descricao: 'Esse projeto é uma aplicação usando a PokeAPI, decidi utilizar alguns hooks que tinha recem aprendido. Provavelmente não foram as melhores escolhas, mas foi uma ótima forma de colocar a mão na massa e aprender na prática.',
        frameworks: ['react', 'javascript', 'css', 'typescript', 'tailwindcss', 'html'],
        link: 'https://my-pokeapi-react.vercel.app/pagina-inicial',
        github: 'https://github.com/derekH13/My-PokeApi-React',
        flex: 'row'
    },
    {
        img: './assets/portfolio/projetos/batman typescript.png',
        title: 'CATALOGO DE FILMES',
        descricao: 'Esse projeto é uma aplicação usando a PokeAPI, e foi uma excelente oportunidade para treinar o que aprendi recentemente. Como ainda estou ganhando experiência em React, decidi utilizar alguns hooks que acabei de aprender. Provavelmente não foram as melhores escolhas, mas foi uma ótima forma de colocar a mão na massa e aprender na prática .',
        frameworks: ['react', 'javascript', 'css', 'bootstrap', 'typescript'],
        link: 'https://derekh13.github.io/new-Catalogo/',
        github: 'https://github.com/derekH13/new-Catalogo',
        flex: 'row-reverse'
    },
    {
        img: './assets/portfolio/projetos/market-react.png',
        title: 'LOJA VIRTUAL',
        descricao: 'Esse projeto é uma aplicação usando a PokeAPI, e foi uma excelente oportunidade para treinar o que aprendi recentemente. Como ainda estou ganhando experiência em React, decidi utilizar alguns hooks que acabei de aprender. Provavelmente não foram as melhores escolhas, mas foi uma ótima forma de colocar a mão na massa e aprender na prática .',
        frameworks: ['react', 'javascript', 'css', 'bootstrap', 'html'],
        link: 'https://react-marcket.vercel.app/pagina-inicial',
        github: 'https://github.com/derekH13/React-Market',
        flex: 'row-reverse'
    },
    {
        img: './assets/portfolio/projetos/nike.png',
        title: 'TÊNIS DA NIKE',
        descricao: 'Esse projeto é uma aplicação usando a PokeAPI, e foi uma excelente oportunidade para treinar o que aprendi recentemente. Como ainda estou ganhando experiência em React, decidi utilizar alguns hooks que acabei de aprender. Provavelmente não foram as melhores escolhas, mas foi uma ótima forma de colocar a mão na massa e aprender na prática .',
        frameworks: ['javascript', 'css', 'typescript', 'html', 'tailwindcss'],
        link: 'https://derekh13.github.io/Loja-Nike/',
        github: 'https://github.com/derekH13/Loja-Nike',
        flex: 'row-reverse'
    },
    {
        img: './assets/portfolio/projetos/PokeRpg2.png',
        title: 'POKERPG',
        descricao: 'Esse projeto é uma aplicação usando a PokeAPI, decidi utilizar alguns hooks que tinha recem aprendido. Provavelmente não foram as melhores escolhas, mas foi uma ótima forma de colocar a mão na massa e aprender na prática.',
        frameworks: ['react', 'javascript', 'css', 'typescript', 'tailwindcss', 'html'],
        link: 'https://my-pokeapi-react.vercel.app/pagina-inicial',
        github: 'https://github.com/derekH13/my-rpg',
        flex: 'row-reverse'
    },
    {
        img: './assets/portfolio/projetos/Twitter post - 4 - Copia.png',
        title: 'JOGO DA COBRINHA',
        descricao: 'Esse projeto é uma aplicação usando a PokeAPI, e foi uma excelente oportunidade para treinar o que aprendi recentemente. Como ainda estou ganhando experiência em React, decidi utilizar alguns hooks que acabei de aprender. Provavelmente não foram as melhores escolhas, mas foi uma ótima forma de colocar a mão na massa e aprender na prática .',
        frameworks: ['javascript', 'html', 'css', 'typescript', 'bootstrap'],
        link: 'https://derekh13.github.io/jogo-cobrinha/',
        github: 'https://github.com/derekH13/cobrinha.ts',
        flex: 'row-reverse'
    },
    {
        img: './assets/portfolio/projetos/todolist 3.png',
        title: 'TODO LIST',
        descricao: 'Esse projeto é uma aplicação usando a PokeAPI, e foi uma excelente oportunidade para treinar o que aprendi recentemente. Como ainda estou ganhando experiência em React, decidi utilizar alguns hooks que acabei de aprender. Provavelmente não foram as melhores escolhas, mas foi uma ótima forma de colocar a mão na massa e aprender na prática .',
        frameworks: ['javascript', 'css', 'typescript', 'tailwindcss', 'html'],
        link: 'https://derekh13.github.io/meu-todoList/index.html',
        github: 'https://github.com/derekH13/meu-todoList',
        flex: 'row-reverse'
    }
]


const { scrollYProgress } = useScroll();







    return(
        <Provider>

            <Nav />

        <section className="portfolio">
            <div className="fundo"><img src="./assets/portfolio/primeiro.png" alt="" /></div>

            <motion.div 
            className="interface ladding"
            initial={{x: -350, opacity: 0 }}
            animate={{x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
            >
                <h1>Desenvolvedor <span>Front End</span></h1>
                <p>Sou programador focado em criar soluções eficientes e inovadoras. Sempre em busca de aprimorar minhas habilidades e explorar novas tecnologias.</p>
           
                <img src="./assets/portfolio/eu.png" alt="" />
            </motion.div>


            <Carousel />


            
        <section className='sobre-min'>
            <div className="fundo1"><img src="./assets/portfolio/habilidades.png"  alt="" /></div>

            <div className="flex1 interface">

                <motion.h1
                initial={{ opacity: 0, scale: .5 }}
                whileInView={{ opacity: 1,  scale: 1  }}
                transition={{ ease: "easeOut", duration: .9 }}
                >
                <span>Tranformando Ideias</span> em código
                </motion.h1>

                <motion.img 
                initial={{ x: 30, opacity: 0, scale: .5 }}
                whileInView={{ opacity: 1,  scale: 1  }}
                transition={{ ease: "easeOut", duration: .9 }}
                className='lamp' src="./assets/portfolio/lamp.png" alt="" 
                />
            </div>

            <motion.div
            initial={{x: -350, opacity: 0 }}
            whileInView={{x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
            className="cursos interface"
            >
                <div className="opcoes-habilidades">
                    <h3 className='active'>habilidades</h3>
                    <h3>cursos</h3>
                </div>

                <div className="habilidades-active">
                    <div className='icon'>
                        <h4>Design de UI/UX :</h4>
                        <img src="./assets/portfolio/icon (2).png" alt="" />
                    </div>

                    <div className='icon'>
                        <h4>Desenvolvimento Web :</h4>
                        <img src="./assets/portfolio/icon (1).png" alt="" />
                        <img src="./assets/portfolio/icon (5).png" alt="" />
                        <img src="./assets/portfolio/icon (3).png" alt="" />
                        <img src="./assets/portfolio/icon (4).png" alt="" />
                        <img src="./assets/portfolio/icon (6).png" alt="" />
                    </div>
                    
                </div>
            </motion.div>
        </section>

        <section className="projetos">
            <div className="fundo3"><img className='mundo' src="./assets/portfolio/fundo-mundo.png" alt="" /></div>

            <div className="interface conteudo">
                <h1>PROJETOS</h1>
                <div className="ponto"></div>
                <p>Cada projeto apresentado aqui reflete minha paixão por tecnologia e minha busca contínua por inovação. Desde a concepção até a implementação, dedico-me a criar soluções que são funcionais, escaláveis e visualmente atraentes.</p>
            </div>

            {
                projetosArray.map((data) => <Projetos img={data.img} title={data.title} descricao={data.descricao} frameworks={data.frameworks} link={data.link} github={data.github} flex={data.flex}/>)
            }
            
        </section>


        </section>

        <footer>

        </footer>
        </Provider> 
    )

}