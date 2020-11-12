import React from 'react'
import TableComp from './Components/Table'
import PageNumbers from './Components/PageNumbers'
import SearchPage from './Components/SearchPage'
import Loading from './Components/Loading'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchValue: '',
      pageNumber : 1,
      loading: true,
      characters: []
    }
    this.cycleCharacters = this.cycleCharacters.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.getCharacters = this.getCharacters.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 componentDidMount(){
    this.getCharacters();
  }

  componentDidUpdate(prevProps, prevState){
      if(prevState.pageNumber !== this.state.pageNumber){
        this.getCharacters();
      }
  }

  getCharacters(searchValue){
    let promises = [];
    let url = searchValue === undefined ? 
        'https://swapi.dev/api/people/?page='+this.state.pageNumber : 
        'https://swapi.dev/api/people/?search='+this.state.searchValue
    console.log(url)
    promises.push(
        fetch(url)
          .then(response => response.json())
          .then((data) => {
            let characters = data.results
            this.cycleCharacters(characters, promises)
            return characters;
        })
        .catch((error) => {
            console.log(error)
          })
      )
  }

  cycleCharacters(characters, promises){
    characters.forEach((character) => {
      promises.push(
          fetch(character.homeworld)
               .then(response => response.json())
               .then((data) => {
                  character.homeworld = data.name;
                  return data.name;
               })
               .catch((error) => {
                console.log(error)
               })
        )
      if(character.species.length > 0){
        promises.push(
            fetch(character.species)
                 .then(response => response.json())
                 .then((data) => {
                   character.species = data.name;
                   return data.name;
                 })
                 .catch((error) => {
                  console.log(error)
                 })
          )
      } else {
        character.species = 'Human';
      }
    })

    Promise.all(promises).then(() => {
        this.setState({
          loading : false,
          characters : characters
        })
    })
  }

updatePage(page){
    if(page == '-' && this.state.pageNumber !== 1){
      page = (this.state.pageNumber - 1)
       this.setState({
        pageNumber: page,
        loading: true
      })
    } 
    if (page == "+" && this.state.pageNumber !== 9){
      page = (this.state.pageNumber + 1)
      this.setState({
        pageNumber: page,
        loading: true
      })
    }
    if(typeof page === 'number'){
      this.setState({
        pageNumber: page,
        loading: true
      })
    }
 }

 updateSearch(event){
   this.setState({
      searchValue: event.target.value
   })
 }

 handleSubmit(){
  this.getCharacters(this.state.searchValue)
 }

  render(){
      if(this.state.loading == false){
        return (
           <div className="container">
              <h1 className="title">GALACTIC RECORDS</h1>
               <SearchPage handleChange={this.updateSearch} handleSubmit={this.handleSubmit} />
               <TableComp characters={this.state.characters} />
               <PageNumbers updatePage={this.updatePage} />
           </div>
        );
      } else {
        return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    }
  }
}

export default App;
