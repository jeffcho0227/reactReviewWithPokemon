import React from 'react';
import Search from './Search.js'
import PokemonList from './PokemonList.js'

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      PokemonList: [],
      pokemonid: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAllPokemon = this.renderAllPokemon.bind(this);
  }

  componentDidMount() {
    this.renderAllPokemon();
  }

  
  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getPokemon(this.state.pokemonid, (data) => {
      let {id, name, sprites} = data.data;
      let copy = this.state.PokemonList.slice();
      this.setState({
        PokemonList: [...copy, {id, name, sprites}]
      }, console.log(this.state))
    });
  }

  renderAllPokemon = () => {
    for(let i = 1; i < 151; i++) {
      this.props.getPokemon(i, (data) => {
        let {id, name, sprites} = data.data;
        let copy = this.state.PokemonList.slice();
        this.setState({
          PokemonList: [...copy, {id, name, sprites}]
        }, console.log(this.state))
      });
    }
  }

  render() {
    // console.log(this.props)
    return(
     <div>
       FIND YOUR POKEMON
       <div><Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/></div>
       <div><PokemonList PokemonList={this.state.PokemonList}/></div>
     </div>
    )
  }
}