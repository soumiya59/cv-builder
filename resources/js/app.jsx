import { CustomProvider } from "rsuite";
import Home from './pages/Home';
import Modeles from './pages/Modeles';
import store from './pages/editor/store/store'
import Editeur from './pages/editor/Editeur'
import Telecharger from './pages/Telecharger'
import Profile from '../js/pages/Profile'
import MonCompt from './pages/MonCompte';
import Abuot from './pages/Abuot';
import ReactDOM from 'react-dom/client';        
import '../css/app.css'
import './bootstrap';
import GlobalStyles from '../css/globalstyles';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";  
import { Provider } from "react-redux";

import Cvzohayr1 from './pages/CVs/Cvzohayr1';

ReactDOM.createRoot(document.getElementById('app')).render(  
    <CustomProvider theme="light">
      <Provider store={store}>
      <Router>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/modeles" element={<Modeles  />} />
                <Route path="/telecharger" element={<Telecharger  />} />
                <Route path="/MonCompte" element={<MonCompt  />} />
                <Route path="/About" element={<Abuot />} />
                <Route path="/editeur" element={<Editeur />} />
          </Routes>
      </Router> 
      </Provider>
    </CustomProvider>
    
    // <div>
    //     {/* <Cvzohayr1 /> */}
    //  </div>
);
