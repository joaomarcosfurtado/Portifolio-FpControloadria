import styles from '../../styles/components/JobItem.module.css'
import JobItemFooter from './JobItemFooter'

interface JobItemProps {
  job : {
    image: string;
    company: string;
    jobRole: string;
    jobType: string;
    text: string;
  }
}

  function JobItem () {
   
  return(
    <>
      <article className={styles.jobItem}>
        <header>
          <img src="/assets/images/teste.jpeg" alt="FP Controladoria"/>
          <div>
            <strong>FP Controladoria</strong>
            <span>Consultor</span>
          </div>
        </header>

        <p>
          Como tudo começou...
          <br /><br />
          
          <div className={styles.imageWithParagraph}>
          
            <img className="" src="/assets/images/bricks.png" alt=""/>
            
            <p>
            Uma carreira é construída como uma
            edificação, tijolo por tijolo. Dentro da
            contabilidade uma parede precisa ser
            levantada no prumo da legislação, da ética
            e da responsabilidade.
          </p>

          <p>
            A FP Controladoria é o resultado de
            vivências práticas no âmbito da
            contabilidade dentro da indústria.
          </p>
            
          <p>
            Quando mergulhamos dentro de uma estrutura corporativa, deparamos com muitos cenários que variam entre processos,
            configuração de sistemas, rotinas não relacionadas a departamentos, tarefas
            redundantes, dentre outros. O reflexo disso são: Retrabalhos, rupturas nos processos,
            falhas de comunicação, planilhas ao invés de sistema, falta de conciliação e muito
            mais.
          </p>

          </div>
          
          <p>
            apresentação dos resultados muitas das vezes não são apreciados e nem são
            confiáveis para tomada de decisão.
          </p>

          <p>
            A FP Controladoria é uma empresa de consultoria e assessoria em Gestão
            Empresarial no que tange a área contábil e administrativa, com foco em visão
            sistêmica, processos e controle, visando promover informações que auxiliem na
            tomada de decisões e planejamentos estratégicos.
          </p>

          <strong>
            “Uma contabilidade bem estruturada torna-se a Controladoria da Empresa”
          </strong>
          
        </p>

       <JobItemFooter />

      </article>

    <article className={styles.jobItem}>
      <header>
        <img src="/assets/images/logotipo_belaischia.jpg" alt="Bela Ischia"/>
        <div>
          <strong>Bela Ischia</strong>
          <span>Gerente de Contabilidade</span>
        </div>
      </header>

      <p>
        Grande laboratório...
        <br /><br />
        
        <div className={styles.imageWithParagraph}>
        
          <img className="" src="/assets/images/BelaIschia1.png" alt=""/>
          
          <p>
            Tivemos a oportunidade de trabalhar 
            nesta empresa no período de 2010 a 2017.
          </p>

          <p>
            A empresa estava numa fase de grande crescimento e 
            por conta disso foi necessário a transição da 
            contabilidade externa para o controle da empresa.
          </p>
            
          <p>
            Tive o privilégio de participar da construção do setor contábil 
            da empresa, formamos um time onde até hoje guardamos boas lembranças.
          </p>

        </div>

        <img 
          className={styles.jobItemBelaIschiaImage}
          src="/assets/images/BelaIschia2.png" alt=""
        />
        
        <p>
          De fato, foi um grande laboratório...
        </p>

        <strong>Pensando em ambiente corporativo</strong>
        <p>
          Nosso setor foi responsável por levar conhecimento a diversas áreas 
          da empresa, como a empresa trabalhava com ERP já há alguns anos antes 
          da implantação da contabilidade, as áreas não tinham o 
          costume de terem suas informações contabilizadas, então muitas coisas 
          que antes era natural, com o crivo contábil, passaria por mudanças, 
          isto impacta muito na rotina dos profissionais, como agir?
        </p>

        <p>
          A contabilidade podia simplesmente continuar estática, assumir os acertos 
          dos lançamentos e continuar com constantes reclamações dos retrabalhos, 
          certo? Não! Não! Estabelecemos as regras, levamos orientações, 
          resultado todo mundo cresceu, a informação melhorou. 
          Foi neste laboratório que criamos o PAC <strong>“Posto avançado Contábil”</strong>, 
          que desempenhou um trabalho excepcional, preparando na origem o input correto.
        </p>

        <strong>
          Pensando em ERP
        </strong>

        <p>
          O que é mais fácil, admitir o errado como certo ou 
          entender a engrenagem e mudar?
          Pois é, a falta de uma perfeita parametrização de sistema 
          pode gerar erros ou até mesmo a descrença que o ERP funciona, a dúvida, 
          pelo fato de tratarmos na contabilidade com informações que geram 
          cálculos de impostos e entrega de obrigações fiscais desencadeiam 
          inúmeras memórias de cálculo para certificar a apuração correspondente.
        </p>

        <p>
          Neste laboratório atuamos em aprofundar o conhecimento no ERP 
          que utilizávamos, que no caso era o TOTVS Protheus, 
          em conhecer e parametrizar o sistema. Com certeza a qualidade de vida 
          dos analistas contábeis melhorou muito!
        </p>

        <p>
        <strong>Pensando em:</strong> Processos, custos, relatórios gerenciais, Fluxo de Caixa, 
        Controle patrimoniais, Verbas comerciais, ou seja, muitos projetos 
        colocados em prática e com resultado.
        </p>
        
      </p>

      <JobItemFooter />

    </article>

    <article className={styles.jobItem}>
        <header>
          <img src="/assets/images/logo-soma.jpg" alt="Soma"/>
          <div>
            <strong>Soma Nutrição Animal</strong>
            <span>Gerente de Contabilidade</span>
          </div>
        </header>

        <p>
          
          <strong>Prestação Serviços...</strong>            
          <p>
            Uma carreira é construída como uma
            edificação, tijolo por tijolo. Dentro da
            contabilidade uma parede precisa ser
            levantada no prumo da legislação, da ética
            e da responsabilidade.
          </p>

          <p>
            Em março de 2017, com a venda da Empresa Bela Ischia fui convidado 
            pela Empresa Soma nutrição Animal para atuar como Gestor do setor 
            contábil.
          </p>
            
          <p>
            Nesta empresa tive a oportunidade de mudar minha formatação de 
            trabalho, após trabalhar por quase dois anos como funcionário, 
            migrei para a prestação de serviços na área de consultoria na área 
            contábil, tive a oportunidade de colocar em prática além da organização contábil, com otimização de processos, diminuição de 
            retrabalhos, planilhas auxiliares, organização, também aplicar o 
            conhecimento das configurações LP (Lançamento padrão) TOTVS, 
            consolidando ainda prática deste conhecimento adquirido. 
            Além destes trabalhos, atuei na organização do ativo fixo, 
            estruturando os bens da empresa no Módulo Ativo Fixo TOTVS Protheus.
          </p>
          
        </p>

        <JobItemFooter />

      </article>
</>
  );
}

export default JobItem;