import './bootstrap';
import '../css/app.css'
import GlobalStyles from '../css/globalstyles';

import ReactDOM from 'react-dom/client';        
import Header from './pages/Header';
import Footer from './pages/Footer'
ReactDOM.createRoot(document.getElementById('app')).render(    
    <>
        <Header />        
        <Footer />        
    </> 
);