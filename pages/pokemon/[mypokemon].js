import React from 'react';
import Image from 'next/image';
import { Card } from 'react-bootstrap';
import styled from '@emotion/styled';

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const H1 = styled.h1`color: primary;`
 const My = styled.li`color: red;`
 const Bckclr = styled.body`background-color:powderblue;`
 const Img = styled.img`width:300;`;
const PokemonPage = ({name, pokemon, error}) => {
   

    return error ?

    <div><h1 className="text-success">Pokemon Not Found</h1>
    
    
    </div>:   
    <div align="center">
        
        <Bckclr>
            <header className=" d-flex justify-content-center">
        <Image className="img-fluid" src='/pkmn.png' alt="Pokemon" width={100} height={77} />
        <Card>
           <h1 className="text-success">SELECTED POKEMON</h1>
           <h3 className="text-primary">Different Images</h3>
       </Card>
        </header>
        <H1> {pokemon?.name}</H1>
        <My>
        {pokemon?.types?.length  && <small>Type : {pokemon?.types.map((t) => <ul key= {t}>{t.type.name}</ul>)}
        </small>}
        </My>

        {pokemon?.sprites && (
            <div className="App">
<ScrollMenu>
    
    <div className="main bg1">
    <Img src = {pokemon.sprites.front_default} height="300"/>
    </div>
    <div className="main bg1">
    <Img src = {pokemon.sprites.front_shiny} height="300" />
    </div>
    <div className="main bg1">
    <Img src = {pokemon.sprites. front_female}  height="300"/>
     </div>
        
     <div className="main bg1">
     <Img src = {pokemon.sprites.back_default}   height="300" />
     </div>
     <div className="main bg1">
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