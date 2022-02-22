const regionSearchBar = document.querySelector('#region')
const countryDropdown = document.querySelector('#country')
const factsArea = document.querySelector('#facts-area')

//APIS Endpoints
const regionBaseUrl = 'https://restcountries.com/v3.1/region'
const countryBaseUrl = 'https://restcountries.com/v3.1/name'


async function getCountries() {
    const selectedRegion = regionSearchBar.value
    const url = `${regionBaseUrl}/${selectedRegion}`
    const data = await fetch(url) //suspend
    //parse the data
    const countries = await data.json()
    const options = countries.map(country =>  `<option value="${country.name.common}">${country.name.common}</option>`)
    countryDropdown.innerHTML = options.join(' ')
}


async function handleCountryChange(){
    const url = `${countryBaseUrl}/${countryDropdown.value}`
    const data = await fetch(url) //suspend
    const countries = await data.json()

    factsArea.innerHTML = convertCountryToFactArea(countries[0])
    console.log(countries)
}


function convertCountryToFactArea(country){
    return `
        <h1> Facts about ${country.name.common}</h1>
        <img src="${country.flags.png}" alt="">
        <table>
            <tr>
                <td>Offical Country Name</td>
                <td>${country.name.official}</td>
            </tr>
             <tr>
                <td>Capital City</td>
                <td>${country.capital}</td>
            </tr>
            <tr>
                <td>Population</td>
                <td>${country.population}</td>
            </tr>
             <tr>
                <td>Population</td>
                <td>${Object.keys(country.currencies).map(key => country.currencies[key].name).join('-')}</td>
            </tr>
        </table>
    `
}













