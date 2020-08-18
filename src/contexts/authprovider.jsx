
import React, { useState,useEffect } from 'react';

import AuthContext from './contexto';

import api from '../service/auth';



export const  AuthProvider = ({children}) =>{
       
         const[usuario,setUsuario] = useState(null);
         const [token, setToken] = useState(localStorage.getItem('@marcelo:token'));
     
        useEffect(()=>{
          
           async function loadStorageData(){
            const storageUser = localStorage.getItem('@marcelo:usuario');
            const storageToken = localStorage.getItem('@marcelo:token');
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
            setUsuario(response.data.data);
        
         
           
            api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
 
            localStorage.setItem('@marcelo:usuario', JSON.stringify(response.data.data));
            localStorage.setItem('@marcelo:token',response.data.token);
       
            setToken(response.data.token);
        };

        function deslogar(){
            localStorage.clear();
            setUsuario(null);
            setToken(null);
          
          

       
            
            
        }

 


    return(
        <AuthContext.Provider value={{token,setToken, usuario,logar,deslogar}}>
            {children}
        </AuthContext.Provider>
      )
}

export default AuthProvider;