const regionSearchBar = document.querySelector('#region')
const countryDropdown = document.querySelector('#country')

function getCountries() {
    const selectedCountry = regionSearchBar.value
    alert(selectedCountry)
}