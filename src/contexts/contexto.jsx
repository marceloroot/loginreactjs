import React, { useState,useEffect,createContext }  from 'react';

import api from '../service/auth';

export const AuthContext = createContext();

const  AuthProvider = ({children}) =>{
       
    const[usuario,setUsuario] = useState({});
    const [token, setToken] = useState(localStorage.getItem('@marcelo:token'));

   useEffect(()=>{
     
      async function loadStorageData(){
       const storageUser = localStorage.getItem('@marcelo:usuario');
       const storageToken = localStorage.getItem('@marcelo:token');
       console.log(storageToken +" --"+storageUser );
       if(storageUser && storageToken){
           api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
           
           setUsuario(JSON.parse(storageUser));
           setToken(storageToken);
       }

      }
      loadStorageData();

   },[])
   
  async function logar(){
      
       const response = await api.post('usuario/authenticate',{"email":'marcelo3@alfenas.mg.gov.br',"password":'21872187'});
       if(response.status == '201'){
        setUsuario(response.data);
   
        
    
       api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

       localStorage.setItem('@marcelo:usuario', JSON.stringify(response.data.data));
       localStorage.setItem('@marcelo:token',response.data.token);
  
       setToken(response.data.token);
       
    }
   

    return response.data;
       
   };

   function deslogar(){
       localStorage.clear();
       setUsuario(null);
       setToken(null);
     
       
   }




return(
   <AuthContext.Provider value={{token, usuario,logar,deslogar}}>
       {children}
   </AuthContext.Provider>
 )
}

export default AuthProvider;