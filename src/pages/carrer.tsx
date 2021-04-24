import PageHeader from "../components/PageHeader";
import JobItem from "../components/JobItem";

import styles from '../styles/pages/Carrer.module.css'
import Head from "next/head";

function Carrer () {
  return (
   
    <>
      <Head>
        <title>FP | Nossa História </title>
      </Head>

      <div id={styles.carrerList} className='container'>
        
        <PageHeader title="Essas são minhas experiências"></PageHeader>

        <main>
          <JobItem />
        </main>
      </div>
    </>
  )
}

export default Carrer