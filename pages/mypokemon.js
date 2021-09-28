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
        }).catch((err)=>
            <h1>Some thing Went Wrong</h1>);
      }
      
useEffect( ()=>
{
  fetchPokemon();
})




           return(
            
            <div className="min-h-screen sm:bg-blue-200  bg-red-200"  >
              <div>
            {pokemon.map(p => (
             
                <div key= {p} className="d-flex justify-content-center" >
                 
                     <button  type="button"
  className="btn btn-outline-dark btn-rounded col-sm-1 col-xs-1 col-md-1 col-lg-1 "  onClick={() => {
                    router.push({
                    pathname: `/pokemon/${p}`,
                    
                                  })
                                }}      
                     >{p}</button>
                     </div>
                     ))}
</div>
         
         </div>
    
       
        )   
            
            
    }
    

export default EmployeePage;