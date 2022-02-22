const regionSearchBar = document.querySelector('#region')
const countryDropdown = document.querySelector('#country')

//APIS Endpoints
const regionBaseUrl = 'https://restcountries.com/v3.1/region'


async function getCountries() {
    const selectedRegion = regionSearchBar.value
    const url = `${regionBaseUrl}/${selectedRegion}`
    const data = await fetch(url) //suspend
    //parse the data
    const countries = await data.json()
    const options = countries.map(country =>  `<option value="${country.name.common}">${country.name.common}</option>`)
    countryDropdown.innerHTML = options.join(' ')
}












