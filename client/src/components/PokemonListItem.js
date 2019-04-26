import React from 'react';

export default function PokemonListItem(props) {
  return(
    <div className="pokemonItem">
      <div>Id: {props.item.id}</div>
      <div>Name: {props.item.name}</div>
      <img src={props.item.sprites.front_default} alt="pokemon image" />
    </div>
  )
}