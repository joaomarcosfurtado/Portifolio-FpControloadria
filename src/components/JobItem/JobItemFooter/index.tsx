import styles from '../../../styles/components/JobItemFooter.module.css'

function JobItemFooter () {
  return(
    <footer className={styles.jobItemFooter}>
      <p id={styles.jobItemFooterP}>
        Nos siga nas redes Sociais: 
        <strong>
          <a href="https://www.linkedin.com/in/francisco-paula/">Linkedin</a> 
        </strong>
      </p>
      

      <a href="http://wa.me/+5532984298095" className={styles.jobItemfooterButtonLink}>
        <button type="button" >
          <img src="/assets/images/icons/whatsapp.svg" alt="WhatsApp"/>
          Entrar em contato
        </button>
      </a>
    </footer>
  );
}

export default JobItemFooter;

