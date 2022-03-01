import {CensusRepo} from "./repository/census-repo.js";
const repo = new CensusRepo()

const form = document.querySelector('#form')
const noOfRows = document.querySelector('#noOfRows')
const countriesTable = document.querySelector('#countries')

form.addEventListener('submit' , addCensus)

window.onload = async ()=>{
    await showCensusData();
}

async function showCensusData() {
    const censuses = await repo.getCensuses(parseInt(noOfRows.value));
    console.log(censuses)
}

function addCensus(e) {
    e.preventDefault()
    console.log(e.target)

    const census = formToObject(e.target)
    census.id = Date.now().toString()
    //call the add method of the repsitory
    repo.addCensus(census)
    form.reset()

}

function formToObject(form) {
    const formData = new FormData(form);
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }

    return data;
}







