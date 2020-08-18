import React ,{useContext, useEffect} from 'react';

import {Link,useHistory} from 'react-router-dom';


import {AuthContext} from '../../contexts/contexto';



function Home() {
   
  const {usuario,logar} = useContext(AuthContext);
  const history = useHistory();
 

   async function handleSingin(){
     const usuario = await logar();

      return history.push('/sobre');
     
 
  }

  return (
    
    <div>
     
      <h1>Home</h1>
       <button title="Logar" onClick={handleSingin}>Logar</button>
      <Link to='/sobre'>Ir para sobre</Link>
    </div>
  );
}

export default Home;
