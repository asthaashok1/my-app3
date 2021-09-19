import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
//import styled from '@emotion/styled'
//import ScrollMenu from 'react-horizontal-scrolling-menu'
const EmployeePage=(props)=>{
 
    const [pokemon, setPokemon] = useState([]);


    const router = useRouter()

    const fetchPokemon=()=>{

        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(data => {
          setPokemon(data.results.map(p => p.name))
        });
      }
      
useEffect( ()=>
{
  fetchPokemon();
})




           return(
            <div>
              <body>
            {pokemon.map(p => (
             
                <div key= {p}  >
                 
                     <button  type="button"
  className="btn btn-outline-primary btn-rounded col-sm-1 col-xs-1 col-md-1 col-lg-1 d-flex"
  data-mdb-ripple-color="dark" onClick={() => {
                    router.push({
                    pathname: `/pokemon/${p}`,
                    
                                  })
                                }}      
                     >{p}</button>
                     </div>
                     ))}
</body>
         
         </div>
    
       
        )   
            
            
    }
    

export default EmployeePage;