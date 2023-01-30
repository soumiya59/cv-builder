import './bootstrap';
import '../css/app.css'
import ReactDOM from 'react-dom/client';        
import GlobalStyles from '../css/globalstyles';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";  
import Modeles from './pages/Modeles';
import Telecharger from './pages/Telecharger'
import Profile from '../js/pages/Profile'
import Home from './pages/Home';

import MonCompt from './pages/MonCompte';
import Abuot from './pages/Abuot';
import Cvzohayr1 from './pages/CVs/Cvzohayr1';


ReactDOM.createRoot(document.getElementById('app')).render(    
    
    <div>
        {/* <Router> */}
        <Cvzohayr1 />
        {/* <Home />  */}
       {/*  <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/modeles" element={<Modeles  />} />
              <Route path="/telecharger" element={<Telecharger  />} />
              <Route path="/MonCompte" element={<MonCompt  />} />
              <Route path="/About" element={<Abuot />} />
        </Routes>
    </Router>  */}
     </div>
);
