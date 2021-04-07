import { FormEvent, useState } from "react";

import PageHeader from "../components/PageHeader"
import { Article } from "../components/Article"

import styles from '../styles/pages/AccountingInformation.module.css'

import accountingArticles from '../../accounting.json';
import ArticleFooter from "../components/ArticleFooter/ArticleFooter";
import ReactDOM from "react-dom";

interface ArticlesProps {
  id: number;
  title: string;
  text: string;
  isActive?: boolean;
}


function AccountingInformation () {
  const [article, setArticle] = useState<ArticlesProps[]>(() => {

    const storagedArticle = accountingArticles;

    if (storagedArticle) {
      return storagedArticle;
    }

    return []
  })
  
  const [ articleTitle, setArticleTitle ] = useState('');
  const [ articleContent, setArticleContent ] = useState('');
  const [ isArticleSearchIsEmpty, setIsArticleSearchIsEmpty] = useState(false);
  

  // function openArticleText (id: number) {
  //   article.map(article => {

  //   })
  // }

  function searchArticles (e: FormEvent) {
    e.preventDefault(); 
    let newArticle = [];

    accountingArticles.map(article => {
      let title = article.title.toLowerCase();
      let content = article.text.toLowerCase();
      let isOkay = false
      

      if (articleTitle !== '' && title.match(`.*${articleTitle.toLowerCase()}.*`) ){
        isOkay = true
      }

      if (articleContent !== '' && content.match(`.*${articleContent.toLowerCase()}.*`) ){
        isOkay = true
      }

      if(isOkay){
        newArticle.push(article);
      } 
    
    })

    setArticle(newArticle);

    if(newArticle.length > 0) {
      setIsArticleSearchIsEmpty(false)
    } else if (articleTitle === '' && articleContent === '') { 
      setArticle(accountingArticles)
    } else setIsArticleSearchIsEmpty(true)

  }

  return (
    
    
    <div id={styles.pageArticleList} className='container'>
      <PageHeader 
        title="Veja algumas áreas em que atuamos"
        description="Você pode escolher a que mais se aplica em sua empresa"
      >
        
        <form id={styles.searchArticles}>

          <div className={styles.inputBlock}>
            <label htmlFor="subject">Título </label>
            <input 
              type="text" 
              id="subject"
              onChange={(e) => setArticleTitle(e.target.value)}
            /> 
          </div>  
            
          <div className={styles.inputBlock}>
            <label htmlFor="week_day">Conteúdo </label>
            <input 
              type="text"
              id="week_day"
              onChange={(e) => setArticleContent(e.target.value)}
            /> 
          </div>  

          <div className={styles.inputBlock}>
            <button type="submit" onClick={searchArticles}> Buscar</button>
          </div>  
          
        </form>

      </PageHeader>

      <div id={styles.accountingPageForm} className="container">
        <main>
          
          {article.map(article => (
            <Article key={article.id}
              id = {article.id}
              title={article.title}
              text={article.text}
              isActive={article.isActive}
            />  
          ))}

          { isArticleSearchIsEmpty && 
            <div className={styles.articleSearchIsEmpty}>
            <img src="/assets/images/icons/warning.svg" alt=""/>
            <p>Que pena, a busca não retornou resultados!</p>
            </div> 
          } 

        <ArticleFooter />  

        </main>
      </div>
    </div>  
  )
}

export default AccountingInformation