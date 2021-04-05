import  Link from 'next/link';
import styles from '../../styles/components/PageHeader.module.css'

function PageHeader (props) {
  return (
    <header className={styles.pageHeader}>
        <div className={styles.topBarContainer}>
          <Link href="/">
            <a ><img src="/assets/images/icons/back.svg" alt=""/></a>
          </Link>
          <img src="/assets/images/logo.png" alt="Proffy"/>
        </div>

        <div className={styles.headerContent}>
          <strong>{props.title}</strong>
          {props.description && <p>{props.description}</p>}
          {props.children}
        </div>
        
      </header>
  );
}

export default PageHeader;