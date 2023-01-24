import './bootstrap';
import '../css/app.css'
<<<<<<< HEAD

import ReactDOM from 'react-dom/client';        
import Header from './pages/Header';
import Footer from './pages/Footer'
=======
import GlobalStyles from '../css/globalstyles';
import ReactDOM from 'react-dom/client';      
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";  
>>>>>>> 79708b31749972e8fbb00e6b6efdcc0632e5d022
import Modeles from './pages/Modeles';
import Telecharger from './pages/Telecharger'
import Profile from '../js/pages/Profile'
import Home from './pages/Home';

import Profile from './pages/Profile';
import TelechargerModal from './pages/TelechargerModal';


ReactDOM.createRoot(document.getElementById('app')).render(    
<<<<<<< HEAD
    
    <>
        {/* <Header />         */}
        {/* <Modeles />         */}
        {/* <Footer />         */}
        {/*  <Home />   */}
         <Profile /> 
         {/* <Modal /> */}
       {/*  <TelechargerModal /> */}
        {/* <Telecharger /> */}
    </> 
=======
    <Router>
        {/* <Home />  */}
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/modeles" element={<Modeles  />} />
              <Route path="/telecharger" element={<Telecharger  />} />
        </Routes>
    </Router> 
>>>>>>> 79708b31749972e8fbb00e6b6efdcc0632e5d022
);