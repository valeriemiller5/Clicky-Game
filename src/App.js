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
    clicked: characters,
    currentScore: 0,
    highScore: 0,
    message: ""
  };

  // WHAT THIS APP SHOULD DO:
  // On click:
    // set 'clicked' in characters json to true
    // increment 'current score' by 1
    // message: 'Steve Holt!'
    // shuffle the images
  // If an image is clicked twice:
    // message: 'I've made a huge mistake...'
    // set 'current score' to 0
    // if this is the highest score, set it to 'high score'
    // shuffle images
  // If max score reached (12 pts):
    // message: 'There's always money in the banana stand *wink*'
    // set 'current score' to 0
    // record 'high score' (if 12 has not previously been reached)
    // shuffle images

  // Handles card 'shuffle' each time an image card is clicked
  shuffleCharacter = arr => {
    // assistance on shuffleCharacter method Googled from https://www.jstips.co/en/javascript/shuffle-an-array/ using Fisher-Yates Shuffling Algorithm
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

  // method to handle all actions when an image is clicked
  handleClick = id => {
    // sets a variable called updateCharacter that removes an image's id when clicked, then adds 1 point to the current score and sets "clicked" to updateCharacter
    let updateCharacter = this.state.clicked.filter(character => character.id !== id);
    this.setState({ 
      characters: this.shuffleCharacter(characters),
      currentScore: this.state.currentScore + 1,
      message: "STEVE HOLT!",
      clicked: updateCharacter
    })
    // sets a variable called findCharacter that looks through the images array, if a clicked id is gone (undefined), then game over...
    let findCharacter = this.state.clicked.find(character => character.id === id)
    if(findCharacter === undefined) {
      this.setState({ 
        message: "I've made a huge mistake...",
        currentScore: 0,
        // ternary conditional operator to set high score
        highScore: ((this.state.currentScore >= this.state.highScore) ? this.state.currentScore : 0)
      })
      this.resetGame();
    } else if (this.state.currentScore === 12) {
      this.setState({
        message: "There's always money in the banana stand *wink*",
        highScore: ((this.state.currentScore >= this.state.highScore) ? this.state.currentScore : 0)
      })
      this.resetGame();
    }
  }

  resetGame = () => {
   this.setState({
    characters,
    clicked: characters,
    currentScore: 0,
    // highScore: ((this.state.currentScore >= this.state.highScore) ? this.state.currentScore : 0),
    message: ""
   }) 
  }
  
  render() {
    return (
      <div className="format">
        <Navbar
          message={this.state.message}
          currentScore={this.state.currentScore} 
          highScore={this.state.highScore}
          // handleClick={this.handleClick}
        />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              clicked={this.state.clicked}
              id={character.id}
              key={character.id}
              image={character.image}
              handleClick = {this.handleClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
