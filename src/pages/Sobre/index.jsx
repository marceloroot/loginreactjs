import React ,{useContext} from 'react';

import {Link,useHistory} from 'react-router-dom';


import {AuthContext} from '../../contexts/contexto';



function Sobre() {
   
  const {deslogar,usuario} = useContext(AuthContext);
  //const usuario  = localStorage.getItem('@marcelo:usuario');
 
  const history = useHistory();
  console.log(usuario);

    function handleLogout(){
     deslogar(); 
    
  
  }

  return (
    <div>
      <h1>Sobre {usuario.name}</h1>

       <button title="Deslogar" onClick={handleLogout}>Deslogar</button>
      <Link to='/'>Ir para Home</Link>
    </div>
  );
}

export default Sobre;
