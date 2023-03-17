
import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'
import characters from './data.js'
import styled from './App.module.css'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
     
     <div className ={styled.nav} >
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>

      <div>
        <Cards
          characters={characters}
        />
      </div>
      
      
    </div>
  )
}

export default App
