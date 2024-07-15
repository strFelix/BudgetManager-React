import React from 'react'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import styles from './css/projectCard.module.css'
import { Link } from 'react-router-dom'

const ProjectCard = ({id, name, budget, category, handleRemove}) => {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
    <div className={styles.projectCard}>
        <h4>{name}</h4>
        <p>
            <span>Orçamento: R${budget}</span>
        </p>
        <p className={styles.categoryText}>
            <span className={`${styles[category.toLowerCase()]}`}></span> {category}
        </p>
        <div className={styles.projectCardActions}>
            <Link to="/">
                <BsPencil /> Editar
            </Link>
            <button onClick={remove}>
                <BsFillTrashFill /> Excluir
            </button>
        </div>
    </div>
  )
}

export default ProjectCard