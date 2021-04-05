import PageHeader from "../components/PageHeader";
import styles from '../styles/pages/HomePage.module.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si'
import { Article } from "../components/Article";

import articles from '../../homepage.json'

function HomePage() {
  
  return(
    
    <div id={styles.homePageForm} className="container">
      <PageHeader 
        title="Seja bem-vindo!"
        description="Veja aqui nossas ultimas atualizações"
      />

      <main>
        {articles.map(article => (
          <Article key={article.id}
            id = {article.id}
            title={article.title}
            text={article.text}
          />  
        ))}

        <footer>
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


      </main>
    </div>
  );
}

export default HomePage;