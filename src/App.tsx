import NavBar from './presentations/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/main.scss';
import LoginContainer from './containers/loginContainer'
import {useState} from 'react';
import RegisterContainer from './containers/registerContainer';
import ChatContainer from './containers/chatContainer';

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
        return (<ChatContainer switchToLogin={()=>setMode(0)} switchToRegister={()=>setMode(1)}/>)
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
