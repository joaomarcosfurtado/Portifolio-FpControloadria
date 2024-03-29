import Link from 'next/link'
import Head from "next/head";

export default function Home() {
  return (
   
    <div id="page-landing">  

      <Head>
        <title>FP Controladoria | Sua Solução para controle</title>
      </Head>
      
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src="/assets/images/logo.png" alt="Logo" />
          <h2>Sua empresa de consultorias</h2>

        </div>

        <img 
          src="/assets/images/landing.png" 
          alt="FP Controladoria" 
          className="hero-image"
        />
 
        <div className="buttons-container">
          <Link href="/homepage" >
            <a className="study">
              <img src="/assets/images/icons/book.svg" alt="HomePage"/>
              Página Inicial
            </a>
          </Link>
          
          <Link href="/carrer">
            <a className="give-classes">
              <img src="/assets/images/icons/computer.svg" alt="Carrer"/>
              Nossa História
            </a>
          </Link>

        </div>

        <span className="accountingInformationPageClick">
          <Link href="accountinginformation"> Clique e saiba mais sobre nossas atuações </Link>
        </span>
      </div>
    </div>
  )
}
