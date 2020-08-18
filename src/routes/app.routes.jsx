import React, {useContext}  from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Tabela from '../pages/Tabela';

import Erro from '../pages/Erro';


import AuthProvider from '../contexts/contexto';
import RoutesPrivate from '../component/Routes/RoutePrivate';


function Routes(){
    
   
    return (
        <div>
            <BrowserRouter>
              <AuthProvider>
                 
               <Switch>
                   
                   <Route path="/" exact component={Home} />
                   <RoutesPrivate path="/sobre"  component={Sobre} />
                   <RoutesPrivate path="/tabela"  component={Tabela} />
                   <Route path="*" component={Erro} />
               </Switch>
               </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default Routes;





