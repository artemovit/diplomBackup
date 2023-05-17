import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppBar from './resources/AppBar';
import FooterBar from './resources/FooterBar';
import AppRouter from './resources/AppRouter';
import { observer } from 'mobx-react';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { check } from './http/userAPI';

const App = observer( () => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally( () => setLoading(false))
  }, [] )

  return (
      <BrowserRouter>
     <AppBar/>
     <AppRouter/>
     <FooterBar/>
     </BrowserRouter>
  );
});

export default App;
