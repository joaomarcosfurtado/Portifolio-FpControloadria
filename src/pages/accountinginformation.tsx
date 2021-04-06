import PageHeader from "../components/PageHeader"
import { Article } from "../components/Article"

import styles from '../styles/pages/AccountingInformation.module.css'

import accountingArticles from '../../accounting.json';
import ArticleFooter from "../components/ArticleFooter/ArticleFooter";

function AccountingInformation () {
  // const [article, setArticle] = ({accountingArticles})

  // function openArticleText (id: number) {
  //   article.map(article => {

  //   })
  // }

  return (
    <div id={styles.pageArticleList} className='container'>
      <PageHeader 
        title="Veja algumas áreas em que atuamos"
        description="Você pode escolher a que mais se aplica em sua empresa"
      >
        
        <form id={styles.searchArticles}>

          <div className={styles.inputBlock}>
            <label htmlFor="subject">Título </label>
            <input type="text" id="subject"/> 
          </div>  
            
          <div className={styles.inputBlock}>
            <label htmlFor="week_day">Corpo do Texto </label>
            <input type="text" id="week_day"/> 
          </div>  
            
          <div className={styles.inputBlock}>
            <label htmlFor="time">Título e Corpo do Texto </label>
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
              isActive={article.isActive}
            />  
          ))}

       

        <ArticleFooter />  

        </main>
      </div>
    </div>  
  )
}

export default AccountingInformation