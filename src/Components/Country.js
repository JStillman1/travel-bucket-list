

const Country = ({country, index, visitCountry, visited}) => {

    const handleButtonClick = (event) => {
        if(event.target.checked){
            visitCountry(country)
            event.target.checked = false;
        }
    }
    let component

   if(visited){
             component = <div className="visited"></div>
        } else{
           component =  <>
           
           <label htmlFor="visited">Visited: </label>
             <input type="checkbox" id="visited" onClick={handleButtonClick}/>
           </>
        }
    

    return(
        <>
        <div key = {index} className="country-info">
            <strong>{country.name.common}</strong>
            <p>{`Capital city: ${country.capital}`}</p>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            {component}
        </div>
        </>
    )
}

export default Country;