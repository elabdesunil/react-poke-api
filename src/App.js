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
      pokeImages: [],
      // temporary: []
    }
  }

     getImage(pokemons){
    return pokemons.map(pokemon =>{
      return this.fetchImage(pokemon)
    })
  }

    async fetchImage(pokemon){
    // console.log('[App.js] fetchImage()');
    // console.log('pokemon name', pokemon.name)
    try {
    const image = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    const imgJson = await image.json();
    // console.log('fetchImage in try', imgJson)
    return await imgJson;
      
    } catch (error) {
      console.log('fetchImage', error)
    }
  }

  async componentDidMount(){
    // console.log('[App.js] componentDidMount')
    try {
      const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`);
      const pokeAbilities = await fetch(`https://pokeapi.co/api/v2/ability/?limit=100`);
      // const eachPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto/`)
      // const eachPk = await eachPokemon.json();
      // console.log(typeof eachPk)
      // console.log('eachPk', eachPk.sprites.back_default)
      const pokeJson = await pokeResponse.json();
      const abilityJson = await pokeAbilities.json();
      const pokeImage = await this.getImage(pokeJson.results);
      console.log('componentDidMount pokeImage: ', pokeImage);
      console.log('componentDidMount pokeJson.results', pokeJson.results);
      // console.log('abilityJson', abilityJson.results);
      this.setState({
        pokemons: pokeJson.results,
        pokeAbilities: abilityJson.results,
        pokeImages: pokeImage
        // temporary: eachPk
      })
    } catch (error) {
        console.log(error);
    }
  }


  render(){
    return (
      
      this.state.pokemons.length > 0 ? 
      (<Playground>
        {console.log('images: ', this.state.pokeImage)}
        <Pokemons 
        name={this.state.pokemons} 
        ability={this.state.pokeAbilities} 
        id='0' image={this.state.pokeImage}/>
        <Pokemons 
        name={this.state.pokemons} 
        ability={this.state.pokeAbilities} 
        id='1'/>
        <Pokemons 
        name={this.state.pokemons} 
        ability={this.state.pokeAbilities} 
        id='2'/>
        <Pokemons 
        name={this.state.pokemons} 
        ability={this.state.pokeAbilities} 
        id='3'/>
        
      </Playground>) : (null)
    );
  };
  
}

export default App;
