import React from 'react'
import { Link } from 'react-router-dom'
import styles from './css/NavBar.module.css'
import Container from './Container'
import logo from '../../assets/img/logo.png'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
        <Container>
            <Link to="/"><img src={logo} alt="Logo" /></Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                <li className={styles.item}><Link to="/company">Empresa</Link></li>
                <li className={styles.item}><Link to="/contact">Contato</Link></li>
            </ul>
        </Container>
    </nav>
  )
}

export default NavBar