import React,{useContext} from 'react';


import Routes from './routes/app.routes';


import ProviderAutenticacao, { AuthProvider } from './contexts/authprovider';

function App() {


  return <Routes />
}

export default App;
