import { useContext, useEffect, useState } from "react";

let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

const[allData,setAllData] = useState({});

useEffect(() =>{
    fetch(url)
    .then((res) => res.json())
    .then((res) => setAllData(res[results]))
})
