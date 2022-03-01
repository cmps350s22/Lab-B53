import {CensusRepo} from "./repository/census-repo.js";

let isEditMode = false
const repo = new CensusRepo()

const form = document.querySelector('#form')
const noOfRows = document.querySelector('#noOfRows')
const countriesTable = document.querySelector('#countries')
const addBtn = document.querySelector('#add-btn')


form.addEventListener('submit', submitCensus)
noOfRows.addEventListener('change', showCensusData)

window.onload = async () => {
    await showCensusData();
    window.deleteCensus = deleteCensus
    window.updateCensus = updateCensus
}

async function showCensusData() {
    const censuses = await repo.getCensuses(parseInt(noOfRows.value));
    console.log(censuses)
    const censusHTMLRows = censuses.map(census => censusToHTMLRow(census)).join(' ')
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
                <i class="fa fa-edit" onclick="updateCensus('${census.id}')">Edit</i>
                <i class="fa fa-trash" onclick="deleteCensus('${census.id}')">Delete</i>
            </td>
        </tr>
    
    `
}

async function submitCensus(e) {
    e.preventDefault()

    const census = formToObject(e.target)

    if (isEditMode) {
        await repo.updateCensus(census)
        isEditMode = false
        addBtn.value = 'Add'
    }
    else {
        census.id = Date.now().toString()
        await repo.addCensus(census)
    }
    form.reset()
    await showCensusData()

}

async function updateCensus(id) {
    const census = await repo.getCensus(id)
    document.querySelector('#country').value = census.country
    document.querySelector('#population').value = census.population
    document.querySelector('#id').value = census.id
    isEditMode = true
    addBtn.value = 'Update'
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







