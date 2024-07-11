import React from 'react'
import styles from './css/Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li><FaFacebook></FaFacebook></li>
        <li><FaInstagram></FaInstagram></li>
        <li><FaLinkedin></FaLinkedin></li>
      </ul>

      <p><span>Bugget Manager</span> &copy; 2024 </p>
    </footer>
  )
}

export default Footer