import {CensusRepo} from "./repository/census-repo.js";

const repo = new CensusRepo()

const form = document.querySelector('#form')
const noOfRows = document.querySelector('#noOfRows')
const countriesTable = document.querySelector('#countries')


form.addEventListener('submit', addCensus)
noOfRows.addEventListener('change', showCensusData)

window.onload = async () => {
    await showCensusData();
    window.deleteCensus = deleteCensus
}

async function showCensusData() {
    const censuses = await repo.getCensuses(parseInt(noOfRows.value));
    console.log(censuses)
    const censusHTMLRows = censuses.map(census => censusToHTMLRow(census)).join()
    countriesTable.innerHTML = `
        <tr>
            <td>Country</td>
            <td>Population</td>
            <td>Action</td>
        </tr>
        <tr>
            ${censusHTMLRows}
        </tr>
    `
}

function censusToHTMLRow(census) {
    return `
        <tr>
            <td>${census.country}</td>
            <td>${census.population}</td>
            <td>
                <i class="fa fa-edit">Edit</i>
                <i class="fa fa-trash" onclick="deleteCensus('${census.id}')">Delete</i>
            </td>
        </tr>
    
    `
}

async function addCensus(e) {
    e.preventDefault()
    console.log(e.target)

    const census = formToObject(e.target)
    census.id = Date.now().toString()
    //call the add method of the repsitory
    form.reset()

    await repo.addCensus(census)
    await showCensusData()

}

async function deleteCensus(id) {
    await repo.deleteCensus(id)
    await showCensusData()
}

function formToObject(form) {
    const formData = new FormData(form);
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }

    return data;
}







