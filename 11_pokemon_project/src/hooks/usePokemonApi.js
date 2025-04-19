import { useEffect, useState } from "react";

let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

function getAllPokemonData() {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            // .then((res) => setAllData(res.results))
            .then((data) => {
                setAllData(data.results); // ✅ get the array from 'results' key
            })
            .catch((err) => console.error("Failed to fetch pokemon data from main API",err));
            
        //console.log(allData);
    },[])
    return allData;
}
// function getPokemonName() {
//     let pokeNumber1 = Math.floor(Math.random() * 1301);
//     setPokeNumber(pokeNumber1);

//     const name = allData[pokeNumber]["name"];
//     console.log(pokeNumber);

//     console.log(name);
//     return name;
// }
// function getPokemonPhoto() {
//     const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNumber}.png`;
//     fetch(url)
//         .then((res) => { return res });
// }

export default getAllPokemonData;



