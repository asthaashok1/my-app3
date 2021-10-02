import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled'



 
   
const PokemonPagebtn = () => {
    const [pokemon, setPokemon] = useState([]);


 
    const router = useRouter()

    const fetchPokemon=()=>{

        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1117')
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
    return (
    
        <div>
        

     {pokemon.map(p => (
      <div key= {p} className="flex justify-content-center" >
            <button  type="button"
             className="btn btn-outline-dark btn-rounded col-sm-1 col-xs-1 col-md-1 col-lg-1 w-30 lg:w-30 md:w-30 py=2 " 
              onClick={() => {
             router.push({
             pathname: `/pokemon/${p}`,
             
                  })
                         }}      
              >{p}</button>
              </div>
              ))}

     
  </div>
 


 )   
     

}

export default PokemonPagebtn;