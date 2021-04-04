import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css'

import { FaLinkedinIn } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si'

function HomePage() {
  return(
    <div id="home-page-form" className="container">
      <PageHeader 
        title="Seja bem-vindo!"
        description="Veja aqui nossas ultimas atualizações"
      />

      <main>
        <fieldset>
          <legend>Novo trojan rouba quase 900 mil senhas de brasileiros</legend>
          <p>a descoberta foi feita pela ISH Tecnologia, empresa brasileira de cibersegurança. O trojan já infectou cerca de 500 mil vítimas no Brasil através de uma campanha de phishing por email, cobrando boletos em atraso. Segundo a ISH, a campanha ainda está ativa e o número de vítimas deve se multiplicar nos próximos dias. As informações são da CISO Advisor.</p>
        </fieldset>

        <fieldset>
          <legend>Google rebate recente estudo sobre buscas</legend>
          <p>Segundo a empresa, o recente estudo da SparkToro, afirmando que a maioria das buscas no Google terminam sem cliques, se baseia em uma metodologia falha e que não compreende como as pessoas realmente utilizam a ferramenta. O Google afirma que, em muitas buscas, as pessoas reformulam suas consultas, estão procurando apenas por fatos rápidos, informações sobre o horário de funcionamento ou telefone de um comércio, e que algumas pesquisas levam diretamente para aplicativos, ao invés de sites. As informações são do blog do Google.</p>
        </fieldset>

        <fieldset>
          <legend>Nova pesquisa pode permitir a criação de baterias que recarregam em apenas 10 minutos</legend>
          <p>O pesquisador Tao Gao descreveu os processos físicos por trás do “lithium plating”, reação colateral que acontece dentro de uma bateria de íons de lítio, permitindo a previsão da ocorrência desse fenômeno durante o processo de carregamento. Gao acredita que novas tecnologias poderão criar baterias para veículos elétricos que seriam totalmente carregadas cinco vezes mais rápido do que o normal, em pouco mais de 10 minutos, sem risco de perigo ou degradação. As informações são da página de notícias da Faculdade de Engenharia da Universidade de Utah.</p>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Warning Image"></img>
            Importante <br />
            Nos siga nas redes sociais!
          </p>
          <div className="social-medias-homepage-footer">
          
          <a href="http://wa.me/+5532984812816">
            <SiWhatsapp className="whatsapp-icon"/>
          </a>

          <a href="http://www.linkedin.com/in/francisco-paula">
          <FaLinkedinIn className="linkedin-icon"/>  
          </a>

          </div>
        </footer>


      </main>
    </div>
  );
}

export default HomePage;