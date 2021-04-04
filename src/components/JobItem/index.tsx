import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

interface JobItemProps {
  job : {
    image: string;
    company: string;
    function: string;
    jobType: string;
    text: string;
  }
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
   
  return(
    <article className="teacher-item">
      <header>
        <img src="https://abir.org.br/abir/wp-content/uploads/2019/05/logotipo_belaischia.jpg" alt={job.company}/>
        <div>
          <strong>{job.company}</strong>
          <span>{job.function}</span>
        </div>
      </header>

      <p>
        {job.jobType}
        <br /><br />
        {job.text}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 120,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
     </article>
  );
}

export default JobItem;