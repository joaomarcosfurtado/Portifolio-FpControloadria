import jobs from '../../jobs.json';


import PageHeader from "../components/PageHeader";
import JobItem from "../components/JobItem";

import styles from '../styles/pages/Carrer.module.css'

function Carrer () {
  return (
    <div id={styles.carrerList} className='container'>
      <PageHeader title="Essas são minhas experiências"></PageHeader>

      <main>
        {jobs.map(job => {
          return <JobItem key={job.id} job={job}/>
        })}    
      </main>
    </div>
  )
}

export default Carrer