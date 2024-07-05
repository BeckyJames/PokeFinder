import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PokemonClient } from "pokenode-ts";

function App() {
  (async () => {
    const pokemonClient = new PokemonClient();

    try {
      const pokemonData = await pokemonClient.listPokemons();
      console.log(pokemonData);
    } catch (error) {
      console.error(error);
    }
  })();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
