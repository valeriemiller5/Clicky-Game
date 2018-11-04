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
    characters,
    clicked: false,
    currentScore: 0,
    highScore: 0
  };

  // On click:
    // set 'clicked' in characters json to true
    // increment 'current score' by 1
    // shuffle the images
  // If an image is clicked twice:
    // message: 'I've made a huge mistake...'
    // set 'current score' to 0
    // if this is the highest score, set it to 'high score'
    // shuffle images
  // If max score reached (12 pts):
    // message: 'You win!!'
    // set 'current score' to 0
    // record 'high score' (if 12 has not previously been reached)
    // shuffle images

  shuffleCharacter = arr => {
    // assistance on shuffleCharacter method Googled from jstips.co using Fisher-Yates Shuffling Algorithm
    let i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  // handles the shuffle when the image is clicked
  handleClick = () => {
    let randomCharacter = this.shuffleCharacter(characters);
    this.setState({ 
      characters: randomCharacter,
      currentScore: this.state.currentScore + 1 
    
    })
  }
  
  render() {
    return (
      <div className="format">
        <Navbar
          currentScore={this.state.currentScore} 
          handleClick={this.handleClick}
          highScore={this.highScore}
        />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              handleClick = {this.handleClick}
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
