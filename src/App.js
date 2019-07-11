import React, {Component} from 'react';
import './App.css';
import Pokemons from './battle/pokemons';
import Playground from './battle/playground';


/// start with this.state = { temporary: []}
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      pokemons: [],
      pokeAbilities: [],
      pokeImage: [],
      // temporary: []
    }
  }

  getImage =() =>{
    this.state.pokemons.map(pokemon =>{
      this.fetchImage(pokemon)
    })
  }

  async fetchImage(pokemon){
    console.log('[App.js] getImage()');
    try {
    const image = await fetch(`https://pokeapi.co/api/v2/${pokemon.name}`)
    const imgJson = image.json();

    this.setState({
        pokeImage: imgJson
    })
      
    } catch (error) {
      
    }
  }

  async componentDidMount(){
    console.log('[App.js] componentDidMount')
    try {
      const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`);
      const pokeAbilities = await fetch(`https://pokeapi.co/api/v2/ability/?limit=100`);
      // const eachPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto/`)
      // const eachPk = eachPokemon.json();
      // console.log('eachPk', eachPk.sprites)
      const pokeJson = await pokeResponse.json();
      const  abilityJson = await pokeAbilities.json();
      console.log('componentDidMount pokeJson.results', pokeJson.results);
      console.log('abilityJson', abilityJson.results);
      this.setState({
        pokemons: pokeJson.results,
        pokeAbilities: abilityJson.results,
        // temporary: eachPk
      })
    } catch (error) {
        console.log(error);
    }
  }

  getPokemonInfo = () =>{
    
  return this.state.pokemons;

  }

  render(){
    return (
      
      this.state.pokemons.length > 0 ? 
      (<Playground>
        {console.log('images: ', this.state.temporary)}
        <Pokemons name={this.state.pokemons} ability={this.state.pokeAbilities} id='0'/>
        <Pokemons name={this.state.pokemons} ability={this.state.pokeAbilities} id='1'/>
        <Pokemons name={this.state.pokemons} ability={this.state.pokeAbilities} id='2'/>
        <Pokemons name={this.state.pokemons} ability={this.state.pokeAbilities} id='3'/>
        
      </Playground>) : (null)
    );
  };
  
}

export default App;
