import react from 'react';

import { Link } from 'react-router-dom';
import logoIMG from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'

interface PageHeaderProps {
  title: String;
  description?: String;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt=""/>
          </Link>
          <img src={logoIMG} alt="Proffy"/>
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
          { props.description && <p>{props.description}</p>}
          {props.children}
        </div>
        
      </header>
  );
}

export default PageHeader;