import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

createServer({
  models: {
    job: Model,
  },

  seeds(server) {
    server.db.loadData({
      jobs: [
        {
          id: 1,
          img: 'https://abir.org.br/abir/wp-content/uploads/2019/05/logotipo_belaischia.jpg',
          company: 'Bela Ischia',
          function: 'Tempo Integral',
          jobType: 'Gerente de Contabilidade',
          text: 'Atuei como gestor da área contábil, presando sempre atender a legislação tributária, mas com foco especial em análise de resultado e apresentação de relatórios Gerenciais, Balanço, GRE Gerencial e DFC demonstrativo de Fluxo de Caixa. A primeira missão foi estruturar um setor contábil, buscando profissionais e formar um time de qualidade, uma equipe eficiente e capaz de atingir os objetivos. O sistema que utilizávamos era o TOTVS Protheus, apesar de minha formação em Ciências contábeis, sempre tive muito atuação na área de sistemas, banco de dados, etc. Através desse conhecimento criamos várias oportunidades de utilizar o sistema com mais profundidade e com mais excelência nas conciliações contábeis. Quanto mais fomos ajustando as parametrizações do sistema mais diminuímos retrabalhos e trabalhos manuais que eram realizados dentro da empresa. Cada dia que passava, mais crescíamos no aspecto organizacional e corporativo. Fiz alguns cursos específicos da TOTVS e me especializei nas configurações de LP (lançamento Padrão), onde configurei a contabilização da empresa unindo o conhecimento contábil e sistêmico, posso garantir que as conciliações ficaram muito mais fáceis a partir de uma configuração bem assertiva. Como gestor, tive a oportunidade de participar do programa PAEX (Parceiros para a Excelência) da fundação Dom Cabral, participei das monitorias, PDD (Programa de desenvolvimento de dirigentes) e desenvolvendo conhecimento na gestão de Marketing e Vendas, Gestão de Processos, Gestão de Pessoas, Gestão de Projetos e Finanças. A aplicação de vários desses conceitos contribuiu ainda mais para o desenvolvimento de nosso trabalho. Nosso foco principal é a visão Contabilidade Gerencial, gerando informações úteis para a tomada de decisão.',
        },
        {
          id: 2,
          img: 'https://abir.org.br/abir/wp-content/uploads/2019/05/logotipo_belaischia.jpg',
          company: 'Soma Nutrição Animal',
          function: 'Tempo Integral',
          jobType: 'Gerente de Contabilidade',
          text: 'Em março de 2017, com a venda da Empresa Bela Ischia fui convidado pela Empresa Soma nutrição Animal para atuar como Gestor do setor contábil. Nesta empresa tive a oportunidade de mudar minha formatação de trabalho, após trabalhar por quase dois anos como funcionário, migrei para a prestação de serviços na área de consultoria na área contábil, tive a oportunidade de colocar em prática além da organização contábil, com otimização de processos, diminuição de retrabalhos, planilhas auxiliares, organização, também aplicar o conhecimento das configurações LP (Lançamento padrão) TOTVS, consolidando ainda prática deste conhecimento adquirido. Além destes trabalhos, atuei na organização do ativo fixo, estruturando os bens da empresa no Módulo Ativo Fixo TOTVS Protheus.',
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/jobs', () => {
      return this.schema.all('job')
    });

    this.post('/jobs', (schema, request) =>{
      const data = JSON.parse(request.requestBody)
      return schema.create('job', data)
    });    
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

