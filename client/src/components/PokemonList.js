import React from 'react';
import PokemonListItem from './PokemonListItem.js'

export default function PokemonList(props) {
  console.log(props)
  return (
    <div id="pokemonList">
      {props.PokemonList.map((n, index) => {
        return <PokemonListItem item={n} key={index}/>
      })}
    </div>
  )
}