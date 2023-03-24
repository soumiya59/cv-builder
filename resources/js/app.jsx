import Home from './pages/Home';
import Modeles from './pages/Modeles';
// import Editeur from './pages/editor/Editeur'
import Editeur from "./pages/editor2/Editeur";
import Telecharger from './pages/Telecharger'
import Profile from '../js/pages/Profile'
import MonCompt from './pages/MonCompte';
import Abuot from './pages/Abuot';
import ReactDOM from 'react-dom/client';        
import '../css/app.css'
import GlobalStyles from '../css/globalstyles';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";  
import Cvzohayr1 from './pages/CVs/Cvzohayr1';

ReactDOM.createRoot(document.getElementById('app')).render(  
      <Router>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/modeles" element={<Modeles  />} />
                <Route path="/telecharger" element={<Telecharger  />} />
                <Route path="/MonCompte" element={<MonCompt  />} />
                <Route path="/About" element={<Abuot />} />
                {/* <Route path="/editeur" element={<Editeur />} /> */}
                <Route path="/editor2" element={<Editeur />} />
          </Routes>
      </Router> 
    
    // <div>
    //     {/* <Cvzohayr1 /> */}
    //  </div>
);
