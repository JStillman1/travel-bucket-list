import { useEffect, useState } from "react";
import CountriesList from "../Components/CountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(result => setCountries(result))
    }, [])

    const visitCountry = (countryVisited) => {
        if(visitedCountries.includes(countryVisited)){
            console.log("Already visited!")
        } 
        else{
            setVisitedCountries([...visitedCountries, countryVisited])
            countries.splice(countries.indexOf(countryVisited), 1)
            setCountries([...countries])

        }
    }

    const moveToVisited = () => {
        const visited = document.querySelector("#visited")
        const others = document.querySelector("#not-visited")
        
        visited.classList.remove("hidden")
        others.classList.add("hidden")
    }

    const moveToOther = () => {
        const visited = document.querySelector("#visited")
        const others = document.querySelector("#not-visited")
        others.classList.remove("hidden")
        visited.classList.add("hidden")
    }


    return(
        <>

            <h2 className="countries-header" onClick={moveToOther}>All Countries:</h2>
            <h2 className="visited-header" onClick={moveToVisited}>Visited Countries: </h2>
            <CountriesList countryList={visitedCountries} visitCountry={visitCountry} visited ={true}/>
            <CountriesList countryList={countries} visitCountry={visitCountry}visited={false}/> 
        
        </>


    )

}

export default CountriesContainer;