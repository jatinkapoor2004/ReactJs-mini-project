import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getAllPokemonData from './hooks/usePokemonApi'

function App() {
  // const alldata = getAllPokemonData()
  // console.log(alldata);

  const allPokemon = getAllPokemonData();
  const [randomPoke, setRandomPoke] = useState(null);
  const [pokeImage, setPokeImage] = useState("");


  // function getpoke() 
  // {
  //    console.log( typeof alldata + " from app file  ");
  // }
  // getpoke();



  function getPokemonName() {
    if (allPokemon.length == 0) return;

    const pokeNumber = Math.floor(Math.random() * 1025);
    console.log(pokeNumber);

    let name = allPokemon[pokeNumber];
    console.log(name);

    if (!name) return;
    name = name.name;
    setRandomPoke(name);
    setPokeImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNumber+1}.png`)
    console.log(name);
    return name;
  }

  // function getPokemonPhoto() {
  //   const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNumber}.png`;
  //   fetch(url)
  //     .then((res) => { return res });
  // }
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-zinc-600'>
        <div className='border border-black rounded-2xl bg-gray-400 w-2/3 h-3/5'>
          <div className='flex justify-center mt-4'>
            <button
              type="submit"
              className='border border-none px-6 py-4 rounded-md bg-blue-600 text-white text-3xl'
              onClick={getPokemonName}
            >Fet Random Pokemon </button>
          </div>

          <div className='flex justify-center mt-6  p-1 text-3xl text-gray-950 '>
              {randomPoke && randomPoke.toUpperCase()}
          </div>

          <div className='flex justify-center items-center mt-16'>
            {/* <img src={pokeImage} alt={"Error in Image"} /> */}
            {pokeImage && <img 
            src={pokeImage} 
            alt={randomPoke}
            className="w-48 h-48 scale-150"
            />}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
