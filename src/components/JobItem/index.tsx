import styles from '../../styles/components/JobItem.module.css'

interface JobItemProps {
  job : {
    image: string;
    company: string;
    jobRole: string;
    jobType: string;
    text: string;
  }
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
   
  return(
    <article className={styles.jobItem}>
      <header>
        <img src={job.image} alt={job.company}/>
        <div>
          <strong>{job.company}</strong>
          <span>{job.jobRole}</span>
        </div>
      </header>

      <p>
        {job.jobType}
        <br /><br />
        {job.text}
      </p>

      <footer>
        <p>
          Nos siga nas redes Sociais: 
          <strong>
            <a href="https://www.linkedin.com/in/francisco-paula/">Linkedin</a> 
          </strong>
        </p>
        

        <a href="http://wa.me/+5532984812816" className={styles.jobItemfooterButtonLink}>
          <button type="button" >
            <img src="/assets/images/icons/whatsapp.svg" alt="WhatsApp"/>
            Entrar em contato
          </button>
        </a>
      </footer>
     </article>
  );
}

export default JobItem;