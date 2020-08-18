import React from 'react';

import {Link} from 'react-router-dom';
function Header() {
  return (
    <div>
      Heder do meu Projeto
      <Link to='/'>Ir para home</Link>
      <hr />
    </div>
  );
}

export default Header;
