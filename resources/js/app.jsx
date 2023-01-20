import './bootstrap';
import '../css/app.css'
import GlobalStyles from '../css/globalstyles';

import ReactDOM from 'react-dom/client';        
import Home from './pages/Home';
import Header from './pages/Header';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Header />        
);