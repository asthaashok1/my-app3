import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Card } from 'react-bootstrap';
export default function Home() {

  const H1 = styled.h1`color: BLue;`
 // const Par = styled.p`color: Blue;`

  const My = styled.li`color: turquoise;`

  const [pokemon, setPokemon] = useState([]);
  const [pokemonpic, setPokemonpic] = useState([]);
  const [pokemon1, setPokemon1] = useState([]);
  const [selectedpokemon, setPokemn] = useState([]);
  const [query, setQuery] = useState([]);

  
const fetchPokemon=()=>{

  //fetch('https://pokeapi.co/api/v2/pokemon')
  //.then(response => response.json())
  //.then(data => {
    //console.log(data.results)
    //setPokemon(data.results.map(p => p.name))
  //});


    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(response=>response.json())
    .then(data=>{
      createPokemonObject(data.results)
    console.log(data.results)})

function createPokemonObject(result){

  result.forEach((pokemn) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemn.name}`)
  .then(response=>response.json())
  .then(data=>{setPokemon(currenList=>[...currenList,data])}) 
  });
}

console.log(pokemon)
}


useEffect( ()=>
{
  fetchPokemon();
},[])


const router = useRouter()


  const goTo = e => {
    e.preventDefault()
    router.push({pathname: '/mypokemon',
    })
  }





const searchPokemon = (e) =>
{
  e.preventDefault();
  
  alert("Searching " + query);
  
  fetch( `https://pokeapi.co/api/v2/pokemon/${query}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    setPokemon1(data)
  });

  
}

const myChangeHandler = (e) =>
{
  
  setQuery (e.currentTarget.value)
}

  return (


 <div className={styles.container}>



    <Head>
        <title>Create Pokemon App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
     </Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
      </link>

      < header className="col-md-12 mb-4  d-flex bg-red-500  justify-content-center">
   
      <h1 className="md-12 text-center text-3xl md:text-5xl text-success">Lets Play with Pokemon</h1> 
       
    </header>

      <div id="search-box" className="bg-primary p-1">
          <div className="row m-0">

              <div className="col-sm-3 text-center p-3">
                <img src="\pkmn.png" className="w-100" style={{color: "red"}}>
                </img>
              </div>
            
              <div className="col-md-9">
              
              <form className="mb-0  d-flex justify-content-center align-items-center h-100 w-600"  onSubmit= {searchPokemon } >
								<div>
               
									<input id="search_name" type="text" name="searchelemet"  placeholder="Enter Pokemon Name" onChange={ myChangeHandler } value = {query} ></input>

                  <button type="button" className="btn btn-primary" onClick={searchPokemon}>
                 <i className="fa fa-search"></i>
                 </button>
                
                 <button type="button" className="btn btn-rounded btn-success align-items-center"  onClick={goTo}>
                  <i className="fa fa-th-list pr-2" aria-hidden="true" ></i>pokemon list</button>

								</div>
                	</form>
            
              </div>
  
          </div>
         
      </div>




<div className="App md-12 text-center text-3xl md:text-5xl">

<ScrollMenu>
   
{pokemon.map((p)=>
  
  //id={p.id}
  //name={p.name}
  //image={p.sprites.other.dream_world.front_default}
  //types={p.types[0].type.name}
  //key={index}
  
    <div className="main bg1" key= {p}>
      
      <img src={p.sprites.other.dream_world.front_default} alt ={p.name} height="100" width="100"/>
      <small>{p.types[0].type.name}</small>
      <Card style={{ width: '15rem' }} >
      <h4>{p.name}</h4>
      </Card>

      </div>
  )}
  </ScrollMenu>
  </div>

      


    <div className="flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
    {pokemon1?.sprites && (
      <img src={pokemon1.sprites.front_default} alt="Pokemon" style={{width: "auto"},{height:"auto"}}/>)}
    </div>
    <div className="flip-box-back">
    <H1> Name : {pokemon1.name}</H1>
    <My>
  {pokemon1?.types?.length > 0  && 
  pokemon1.types.map((t) => <small key= {t}>Type : {t.type.name}</small>)}
 
 </My> 
    </div>
  </div>
</div>

    </div>
  )
}


