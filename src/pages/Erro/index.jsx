import React from 'react';

import {Link} from 'react-router-dom';



function Erro() {
  return (
    <div>
      <h1>Pagina não Encontrada</h1>
      <Link to='/'>Ir para Home</Link>
    </div>
  );
}

export default Erro;
