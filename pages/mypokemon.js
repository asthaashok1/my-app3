import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import ScrollMenu from 'react-horizontal-scrolling-menu'



const EmployeePage=(props)=>{
 
    const [pokemon, setPokemon] = useState([]);
    const [morepokemon, setmorePokemon] = useState([]);

    const router = useRouter()

    const fetchPokemon=()=>{

        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')
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

const tomorePokemon = (e) =>
{
  e.preventDefault();
  
 
  fetch( `https://pokeapi.co/api/v2/pokemon?offset=41&limit=201`)
  .then(response => response.json())
  .then(data => {
     setmorePokemon(data.results.map(p => p.name))
        }).catch((err)=>
            <h1>Some thing Went Wrong</h1>);
      
      }


           return(
            
            <div>
               <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
      </link>
              <div className="sm:bg-blue-200  bg-red-200 p-5">
              <button  type="button"
                    className="btn btn-outline-primary btn-rounded col-sm-1 col-xs-1 col-md-1 col-lg-1 w-30 
                    lg:w-30 md:w-30"
                    onClick={tomorePokemon}> 
                    show more</button>
                    <button type="button" className="btn btn-rounded btn-success"  onClick={() => {
                    router.push({
                    pathname: `/pokebtnpage`,
                    
                                  })
                                }} >
                  <i className="fa fa-th-list" aria-hidden="true" ></i>Show All</button>

 
            {pokemon.map(p => (
             <div key= {p} className="d-flex justify-content-center" >
                   <button  type="button"
                    className="btn btn-outline-dark btn-rounded col-sm-1 col-xs-1 col-md-1 col-lg-1 w-30 lg:w-30 md:w-30 " 
                     onClick={() => {
                    router.push({
                    pathname: `/pokemon/${p}`,
                    
                                  })
                                }}      
                     >{p}</button>
                     </div>
                     ))}

            {morepokemon?.map(p => (
             <div key= {p} className="d-flex justify-content-center" >
                   <button  type="button"
                    className="btn btn-outline-dark btn-rounded col-sm-1 col-xs-1 col-md-1 col-lg-1 w-30 lg:w-30 md:w-30 " 
                     onClick={() => {
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