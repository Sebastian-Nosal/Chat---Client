import React from 'react';
import NavBar from './presentations/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/main.scss';
import LoginContainer from './containers/loginContainer'
import {useState} from 'react';
import RegisterContainer from './containers/registerContainer';

/*
    mode 0 -> Login
    mode 1 -> Register
    mode 2 -> Chat
*/

function App() 
{
  const [mode,setMode] = useState(0);
 
  function switchMode()
  {
    switch(mode)
    {
      case 0:
        return (<LoginContainer switchToRegister={()=>setMode(1)} switchToChat={()=>setMode(2)}/>)
        break;
      case 1:
        return (<RegisterContainer switchToLogin={()=>setMode(0)} switchToChat={()=>setMode(2)}/>)
        break;
      case 2:
        return (<></>)
        break;
    }
  }

  return (
    <Provider store={store}>
      <NavBar/>
      {switchMode()}
    </Provider>
  );
}

export default App;
