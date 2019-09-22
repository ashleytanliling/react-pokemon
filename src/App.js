import React from "react";
import "./App.css";
import pokemon from './pokemon/pokemon';
import { isTemplateElement } from "@babel/types";

// console.log (pokemon);

//  CHILD
const OnePokemon = (props) => {
  const pokemon = props.pokemon;
  const pokemonTypesArray = props.pokemon.type;
  const pokemonTypesListing = () => {
    return pokemonTypesArray.map(type => 
      (<span key={type} className={type}>{type}</span>))
  }

  // function importAll(r) {
  //   return r.keys().map(r);
  // }
  
  // const images = importAll(require('./pokemon' + id + '.png');

  return (
    <div className="pokemon">
      <img className="image" alt="" src={require(`./pokemon/${pokemon.id}.png`)}></img>
      <h1>{pokemon.name.english}</h1>
      <p>{pokemonTypesListing()}</p>
      <p>HP: {pokemon.base.HP}</p>
      <p>Attack: {pokemon.base.Attack}</p>
      <p>Defence: {pokemon.base.Defence}</p>
      <p>SpAttack: {pokemon.base.SpAttack}</p>
      <p>SpDefence: {pokemon.base.SpDefence}</p>
      <p>Speed: {pokemon.base.Speed}</p>
    </div>
  )
}

// PARENT
// const Page = () => {

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: [],
    }
  }

  componentDidMount() {
    fetch("https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData")
    .then(res => res.json())
    .then(resInJson => 
      this.setState((state) => {
        return { pokemonData: resInJson };
      })
    );
  }

  render() {
    return (
      <div>
        <h1>Pokemon</h1>
        {
          // pokemon.map(item => (
          this.state.pokemonData.map(item => (
            <OnePokemon key={item.id} pokemon={item} />
          ))
        }
      </div>
    )
  }
}

// const HelloWho = (props) => {
//   return <div>Hello {props.name}</div>
// }

function App() {
  return (
    <div className="App">
        <Page />
      {/* <HelloWho name={"Ashley"} /> */}
    </div>
  );
}

export default App;
