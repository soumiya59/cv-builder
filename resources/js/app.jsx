import './bootstrap';
import '../css/app.css'
import GlobalStyles from '../css/globalstyles';

import ReactDOM from 'react-dom/client';        
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer'
ReactDOM.createRoot(document.getElementById('app')).render(    
    <>
        <Header />        
        <Footer />        
    </> 
);