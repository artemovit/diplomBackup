import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppBar from './resources/AppBar';
import FooterBar from './resources/FooterBar';
import AppRouter from './resources/AppRouter';

const App = () => {
  return (
      <BrowserRouter>
     <AppBar/>
     <AppRouter/>
     <FooterBar/>
     </BrowserRouter>
  );
}

export default App;
