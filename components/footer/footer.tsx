import React from 'react'
import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ }) => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
        <div className={styles.partners}>
          <div><b>Наші партнери</b></div>
          <ul>
            <li>ads</li>

          </ul>
        </div>

        <div className={styles.copyright}>
          <div><b>Petfinder</b></div>
          <img src='/logo.png' alt='logo in footer' className={styles.logo} />
          <div>відкритий студенський проект</div>
        </div>
        <div className={styles.links}>
          <FontAwesomeIcon icon={['fab', 'github-alt']} onClick={() => window.location.href = 'https://github.com/AgentosUA/petfinder'} className={styles.link} />
          <FontAwesomeIcon icon={['fab', 'facebook']} onClick={() => window.location.href = 'https://github.com/AgentosUA/petfinder'} className={styles.link} />
        </div>
      </section>
    </footer>
  )
}

export { Footer }