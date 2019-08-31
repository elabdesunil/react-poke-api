# REACT POKE API INTEGRATION - USING API WITH REACT
This is just a API integration practice application. 

## Code Snippets

### Fetching API
```javascript
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
```


### You can view the live deployment at https://sunilale0.github.io/react-poke-api/
