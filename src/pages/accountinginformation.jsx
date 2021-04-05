import PageHeader from "../components/PageHeader"
import { Article } from "../components/Article"

import { FaLinkedinIn } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si'

import styles from '../styles/pages/AccountingInformation.module.css'

import accountingArticles from '../../accounting.json';

function AccountingInformation () {
  return (
    <div id={styles.pageArticleList} className='container'>
      <PageHeader 
        title="Veja algumas áreas em que atuamos"
        description="Você pode escolher a que mais se aplica em sua empresa"
      >
        
        <form id={styles.searchArticles}>

          <div className={styles.inputBlock}>
            <label htmlFor="subject">Assunto: </label>
            <input type="text" id="subject"/> 
          </div>  
            
          <div className={styles.inputBlock}>
            <label htmlFor="week_day">Regra de negócio: </label>
            <input type="text" id="week_day"/> 
          </div>  
            
          <div className={styles.inputBlock}>
            <label htmlFor="time">Ano: </label>
            <input type="text" id="time"/>
          </div>

          
        </form>

      </PageHeader>

      <div id={styles.accountingPageForm} className="container">
        <main>
          
          {accountingArticles.map(article => (
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
            <div className={styles.socialMediasHomepageFooter}>
            
            <a href="http://wa.me/+5532984812816">
              <SiWhatsapp className={styles.whatsappIcon}/>
            </a>

            <a href="http://www.linkedin.com/in/francisco-paula">
            <FaLinkedinIn className={styles.linkedinIcon}/>  
            </a>

            </div>
          </footer>


        </main>
      </div>
    </div>  
  )
}

export default AccountingInformation