import './bootstrap';
import '../css/app.css'
import Profile from './pages/Profile'
import ReactDOM from 'react-dom/client';        
import Header from './pages/Header';
import Footer from './pages/Footer'
/* import Modeles from './pages/Modeles';
import Carousel from './pages/Carousel';
import Telecharger from './pages/Telecharger'
import Home from './pages/Home'; */

ReactDOM.createRoot(document.getElementById('app')).render(    
    <>
        <Header />   
             <Profile/> 
        <Footer />        
    </> 
);