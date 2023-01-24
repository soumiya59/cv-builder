import './bootstrap';
import '../css/app.css'
import ReactDOM from 'react-dom/client';        
import GlobalStyles from '../css/globalstyles';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";  
import Modeles from './pages/Modeles';
import Telecharger from './pages/Telecharger'
import Profile from '../js/pages/Profile'
import Home from './pages/Home';
import TelechargerModal from './pages/TelechargerModal';


ReactDOM.createRoot(document.getElementById('app')).render(    
    <Router>
        {/* <Home />  */}
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/modeles" element={<Modeles  />} />
              <Route path="/telecharger" element={<Telecharger  />} />
        </Routes>
    </Router> 
);