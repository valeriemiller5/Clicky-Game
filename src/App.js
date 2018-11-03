import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Set state to the characters in the characters json
  state = {
    characters
  };
  
  render() {
    return (
      <div className="format">
        <Navbar />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard 
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
