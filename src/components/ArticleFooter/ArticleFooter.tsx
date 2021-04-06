import { FaLinkedinIn } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si'

import styles from '../../styles/components/ArticleFooter.module.css'

function ArticleFooter () {
  return (
    <footer className={styles.articleFooter}>
    <p>
      <img src="/assets/images/icons/warning.svg" alt="Warning Image"></img>
      Importante <br />
      Nos siga nas redes sociais!
    </p>
    <div className={styles.socialMediasHomePageFooter}>
    
    <a href="http://wa.me/+5532984298095">
      <SiWhatsapp className={styles.whatsappIcon}/>
    </a>

    <a href="http://www.linkedin.com/in/francisco-paula">
    <FaLinkedinIn className={styles.linkedinIcon}/>  
    </a>

    </div>
  </footer>
  );
}

export default ArticleFooter;