import { useEffect, useState } from 'react';
import JobItem from '../../components/JobItem';
import PageHeader from '../../components/PageHeader';
import { api } from '../../services/api';

import './styles.css'


interface JobsProvider {
  id: number;
  image: string;
  company: string;
  function: string;
  jobType: string;
  text: string;
}

function JobsList() {
  const [jobs, setJobs] = useState<JobsProvider[]>([]);

  useEffect(() => {
    api.get('jobs')
    .then(response => setJobs(response.data.jobs))
    console.log(jobs);
  }, []);
  
  return(
    <div id="page-teacher-list" className='container'>
      <PageHeader title="Essas são minhas experiências"></PageHeader>

      <main>
        {jobs.map(job => {
          return <JobItem key={job.id} job={job}/>
        })}    
      </main>
    </div>
  );
}

export default JobsList;