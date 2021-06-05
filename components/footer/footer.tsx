import React from 'react'
import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ }) => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
        <div className={styles.partners}>
          <div><b>Наші партнери</b></div>
          <ul className={styles.parthers}>
            <li><a href="https://www.facebook.com/lyartcreations/">LY Art</a></li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <img src='/logo.png' alt='logo in footer' className={styles.logo} />
        </div>
        <div className={styles.links}>
          <a href='https://github.com/AgentosUA/petfinder'><FontAwesomeIcon icon={['fab', 'github-alt']} className={styles.link} /></a>
          <a href='https://github.com/AgentosUA/petfinder'><FontAwesomeIcon icon={['fab', 'facebook']} className={styles.link} /></a>
        </div>
      </section>
    </footer>
  )
}

export { Footer }