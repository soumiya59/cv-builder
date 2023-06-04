import Home from './pages/Home';
import Modeles from './pages/Modeles';
import Editeur from "./pages/editor2/Editeur";
import Telecharger from './pages/Telecharger'
import Profile from '../js/pages/Profile'
import MonCompt from './pages/MonCompte';
import Abuot from './pages/Abuot';
import ReactDOM from 'react-dom/client';  
import SeConnecter from './pages/Login';      
import '../css/app.css'
import GlobalStyles from '../css/globalstyles';
import { ContextProvider } from './context/ContextProvider';
import { BrowserRouter as Router , Routes, Route , Navigate} from "react-router-dom";  
import { useStateContext } from "./context/ContextProvider";


ReactDOM.createRoot(document.getElementById('app')).render(  
    <div>
        <ContextProvider>
        <Router>
        <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/modeles" element={<Modeles  />} />
                <Route path="/telecharger" element={<Telecharger  />} />
                <Route path="/MonCompte/:id" element={<MonCompt  />} /> 
               {/*  <PrivateRoute path="/MonCompte" element={<MonCompt />} /> */}
                <Route path="/About" element={<Abuot />} />
                <Route path="/editeur" element={<Editeur />} />
                <Route path="/login" element={<SeConnecter />} />
        </Routes>
    </Router> 
    </ContextProvider>
     </div>
);
