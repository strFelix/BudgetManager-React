import React from 'react'
import styles from './css/newProject.module.css'
import ProjectForm from '../project/ProjectForm'

const NewProject = () => {
  return (
    <div className={styles.newPeojectContainer }>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços!</p>
      <ProjectForm btnText='Criar projeto'></ProjectForm>
    </div>
  )
}

export default NewProject