import React from 'react'
import styles from './css/newProject.module.css'
import ProjectForm from '../project/ProjectForm'

const NewProject = () => {
  return (
    <div className={styles.newPeojectContainer }>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços!</p>
      <p>Formulário</p>
      <ProjectForm></ProjectForm>
    </div>
  )
}

export default NewProject