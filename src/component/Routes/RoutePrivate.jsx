import React, {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import Header from '../../component/Header';
import {AuthContext} from '../../contexts/contexto';

const RoutesPrivate = ({component: Component, ...rest}) => {

    const {token,usuario} = useContext(AuthContext);
    
    return(
        <>
     <Header />
      <Route
           
           
           {...rest}
            render={()=>token 
            ?  <Component {...rest} />
            : <Redirect to ="/" />
            
         }
      />
      
      </>
    )
}


export default RoutesPrivate;