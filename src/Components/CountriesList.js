import Country from "./Country";

const CountriesList = ({countryList, visitCountry, visited}) => {
    
    const countries = countryList.map((country, index) => {
        return(
            <Country country={country} index={index} visitCountry={visitCountry} visited={visited} />
        )
    })

    return(
        <section id={visited ? "visited": "not-visited"} className={visited ? "visited hidden": "not-visited"}>
            {countries}
        </section>
    )
}

export default CountriesList;