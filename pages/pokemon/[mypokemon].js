import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
const H1 = styled.h1`color: Green;`
 const My = styled.li`color: red;`
 const Bckclr = styled.body`background-color:powderblue;`
 const Img = styled.img`width:300;`;
const PokemonPage = ({name, pokemon, error}) => {
   

    return error ?

    <div><h1>Pokemon Not Found</h1>
    
    
    </div>:
   

        
        
    <div align="center">
        <Bckclr>
        <Image src='/pkmn.png' width={128} height={77}/>
        <H1> {pokemon?.name}</H1>
        <My>
        {pokemon?.types?.length  && <ul>
        {pokemon?.types.map((t) => <li key= {t}>{t.type.name}</li>)}
        </ul>}
        </My>

        {pokemon?.sprites && (
            <div className="App">
<ScrollMenu>
    <div className="main bg">
    <Img src = {pokemon.sprites.front_default} height="300"/>
    </div>
    <div className="main bg1">
    <Img src = {pokemon.sprites.front_shiny} height="300" />
    </div>
    <div className="main bg">
    <Img src = {pokemon.sprites. front_female}  height="300"/>
     </div>
        
     <div className="main bg1">
     <Img src = {pokemon.sprites.back_default}   height="300" />
     </div>
     <div className="main bg">
     <Img src = {pokemon.sprites.back_shiny}  height="300"/>
     </div>
     <div className="main bg1">
     <Img src = {pokemon.sprites.back_female} height="300"/>
     </div>   
             
</ScrollMenu>
        </div>
        )}
        </Bckclr>
        
            </div>
    
    
}

PokemonPage.getInitialProps=({query})=>{

  if(query?.mypokemon){
         
        return fetch( `https://pokeapi.co/api/v2/pokemon/${query?.mypokemon}`)
        .then(response => response.json())
        .then(data => {
            return {name: query.mypokemon, pokemon: data}
        }).catch((err)=>{

            return{error : err}})
    };
  

                


         
}

export default PokemonPage;