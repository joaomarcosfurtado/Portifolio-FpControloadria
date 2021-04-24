import PageHeader from "../components/PageHeader";
import styles from '../styles/pages/HomePage.module.css'
import { Article } from "../components/Article";

import articles from '../../homepage.json'
import  ArticleFooter from "../components/ArticleFooter/ArticleFooter";
import Head from "next/head";

function HomePage() {
  
  return(
    <>
      <Head>
        <title>FP  |  Homepage</title>
      </Head>
      
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
              isActive={article.isActive}
            />  
          ))}

        <ArticleFooter/>


        </main>
      </div>
    </>  
  );
}

export default HomePage;