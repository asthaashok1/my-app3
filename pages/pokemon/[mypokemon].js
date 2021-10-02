import React from 'react';
import Image from 'next/image';
import { Card } from 'react-bootstrap';
import styled from '@emotion/styled';

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const H1 = styled.h1`color: primary;`
 const My = styled.li`color: red;`
 const Bckclr = styled.body`background-color:powderblue;`
 const Img = styled.img`width:400;`;
const PokemonPage = ({name, pokemon, error}) => {
   

    return error ?
    
    <div><h1 className="text-success">Pokemon Not Found</h1>
    
    
    </div>: 
    <Bckclr> 
        <div> 
    <div align="center">
        
      
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
           
<div className="justify-content-center align-items-center max-w-lg sm:bg-red-300 lg:max-w-md p-2 ">

<ScrollMenu >
    

<Card className="main bg1  text-center text-xl md:text-sm  xs:wd-49 xs:text-3xl xs:container-fluid "  >
    
    
<small>front_
            default</small>
    <Img src = {pokemon.sprites.front_default} alt="Not exist" height="700"/>
  
</Card>

    
<Card className="main bg1  text-center text-xl md:text-sm  xs:wd-49 xs:text-3xl xs:container-fluid " >
    
    
<small>front_shiny</small>
    <Img src = {pokemon.sprites.front_shiny} alt="Not exist" height="700" />
  
</Card>


<Card className="main bg1  text-center text-xl md:text-sm  xs:wd-49 xs:text-3xl xs:container-fluid " >
    
    
<small>front_female</small>
    <Img src = {pokemon.sprites.front_female} alt="Not exist" height="700"/>
</Card>

<Card className="main bg1  text-center text-xl md:text-sm  xs:wd-49 xs:text-3xl xs:container-fluid " >
    
    
<small>back_default</small>
     <Img src = {pokemon.sprites.back_default}  alt="Not exist" height="700" />
 
</Card>

<Card className="main bg1  text-center text-xl md:text-sm  xs:wd-49 xs:text-3xl xs:container-fluid" >
    
    
<small>back_shiny</small>
     <Img src = {pokemon.sprites.back_shiny} alt="Not exist" height="700"/>
    
</Card>

<Card className="main bg1  text-center text-xl md:text-sm  xs:wd-49 xs:text-3xl xs:container-fluid" >
    
<small>back_female</small>
     <Img src = {pokemon.sprites.back_female} alt="Not exist" height="700"/>
    

</Card>          
</ScrollMenu>
        </div>
        )}
    
        
            </div>



  

            
            </div>
            </Bckclr>
    
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