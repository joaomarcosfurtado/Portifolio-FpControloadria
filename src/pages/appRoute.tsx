import { BrowserRouter, Route} from 'react-router-dom'
import Landing from './Landing';
import AboutUs from './HomePage';
import JobsList from './JobsList';
import AccountingInformation from './AccountingInformation';


function AppRoutes () {
  return(
    <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/carrer" component={JobsList} />
        <Route path="/home-page" component={AboutUs} />
        <Route path="/accounting-information" component={AccountingInformation} />
    </BrowserRouter>
  )
  
}

export default AppRoutes;