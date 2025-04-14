import {useEffect,useState} from "react";

function useCurrencyInfo(currency){//need that currency which need to be converted
  // example if curr = usd it means from USD to inr 
    const[data,setData] = useState({});// data is of object type
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency])) // we do this bcoz the api provide two attributes of object one is date and 2nd object is further a object which store all conversion rates that is why we make data as object type
    }, [currency])
    
    return data;
}

export default useCurrencyInfo;