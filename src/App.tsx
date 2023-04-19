import React from 'react';
import NavBar from './presentations/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginForm from './presentations/LoginForm';
import './styles/main.scss';
import LoginContainer from './containers/loginContainer'

function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <LoginContainer/>
    </Provider>
  );
}

/*<LoginForm 
        passwordStrength={30} 
        passwordComment='' 
        passwordConfig={null} 
        usernameConfig={null} 
        onSubmit={()=>{}} 
        passwordHandler={()=>{}}  />
*/

export default App;
