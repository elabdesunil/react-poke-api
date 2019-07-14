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
      pokeInfo: []
    }
  }

  // async somefunct(pokeAddress) {
  //   let someVar = await fetch(`${pokeAddress}`);
  //   let varJsoned = await someVar.json();
  //   console.log('someVar in somefunct jsoned', varJsoned)
  //   return varJsoned;
  // } 


  
  async componentDidMount(){
    try {
      const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`);
      const pokeAbilities = await fetch(`https://pokeapi.co/api/v2/ability/?limit=100`);
      console.log('pokeResponse without json conversion', pokeResponse)
      const pokeJson = await pokeResponse.json();
      const abilityJson = await pokeAbilities.json();

      const pkNames = pokeJson.results.map(pokemon => {
        return pokemon.name
      });
      console.log('pkNames: ', pkNames)

      let pkInfo = [];
      for (let i = 0; i < pkNames.length; i++) {
        let tempPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkNames[i]}`);
        let tempPokeJsoned = await tempPoke.json();
        pkInfo.push(tempPokeJsoned);
      }
      console.log('pkInfo ', pkInfo);
      console.log('componentDidMount pokeJson.results', pokeJson.results);
      this.setState({
        pokemons: pokeJson.results,
        pokeAbilities: abilityJson.results,
        pokeInfo: pkInfo
      })
    } catch (error) {
        console.error(error);
    }
  }

  imageArray = () => {
    let arr = [];
    for (let i = 0; i < 5; i++)
      arr.push(this.state.pokeInfo[i].sprites.back_default)
    return arr;
  }



  giveImage = () => {
    console.log('console logging this.state.pokeInfo[0]["sprites"]back_default', (this.state.pokeInfo[0].sprites.back_default))
    return this.state.pokeInfo[0].sprites.back_default;
      return 'text';
    }
  
  giveDetails = () => {
    var rows = [];
    for (var i = 0; i < 5; i++) {
      rows.push(<img src='this.state.pokeInfo[i].sprites.back_default' alt={i + i + i} size='5%' key={'00'+i}/>);
    }
    console.log(rows)
    return <div>{rows}</div>;
  }
    


  render() {

    console.log('type of this.state.pokeInfo: '+ typeof this.state.pokeInfo)
    console.log('this.state.pokeInfo: ', this.state.pokeInfo)

    // let imageArr = this.imageArr;
    // let someVar = '<img src={ this.state.pokeInfo[0].sprites.back_default }'
    
    return (
      
      this.state.pokemons.length > 0 && this.state.pokeInfo.length > 0 ?

        (<Playground>

          <div>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'
              style={{ width: '100%' }}/>
            <img 
              src={this.giveImage()}
              alt="eachpokemon"
              style={{ width: '100%' }} />
            
          </div>
        {console.log('pokeInfo from state: ', this.state.pokeInfo)}
        <Pokemons 
        name={this.state.pokemons} 
        ability={this.state.pokeAbilities} 
        id='0' image={this.state.pokeImages}/>
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
            id='3' />
          {this.giveDetails()}
          
        
          
        
        
      </Playground>) : (null)
    );
  };
  
}

export default App;
