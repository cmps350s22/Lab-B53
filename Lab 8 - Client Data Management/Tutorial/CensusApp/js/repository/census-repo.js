const db = new Localbase('census.db')

export class CensusRepo {

    //Indexed DB
    //Adding
    addCensus(census) {
        try {
            return db.collection('censuses')
                .add(census)
        } catch (e) {
            console.log(e)
        }
    }

    //updating*/
    updateCensus(updateCensus) {
        try {
            return db.collection('censuses')
                .doc({id: census.id})
                .update(updateCensus)
        } catch (e) {
            console.log(e)
        }
    }

    //deleting*/
    deleteCensus(id) {
        try {
            return db.collection('censuses').doc({id}).delete()
        } catch (e) {
            console.log(e)
        }
    }

    //finding specific document(census)*/
    getCensus(id) {
        try {
            return db.collection('censuses').doc({id}).get()
        } catch (e) {
            console.log(e)
        }
    }

    //querying all the census of all countries
    getCensuses(noOfRecords) {
        try {
            return db.collection('censuses').limit(noOfRecords).get()
        } catch (e) {
            console.log(e)
        }
    }
}
