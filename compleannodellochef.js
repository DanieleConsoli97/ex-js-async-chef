
async function getChefBirthday(id) {
    let receipes
    try {
        const promiseReceipes = await fetch(`https://dummyjson.com/recipes/${id}`)
        receipes = await promiseReceipes.json()
    } catch (error) {
        console.log(error)
       throw Error ("errore fetch receipe", error) 
    }

    if (receipes.message){

        throw Error ("errore  receipe non trovata") 
    }

    let chef
    try {
        const promiseChef = await fetch(`https://dummyjson.com/users/${receipes.userId}`)
        chef = await promiseChef.json()
        
    } catch (error) {
        console.log(error)
        throw Error ("errore fetch chef", error) 
    }
    if (!chef){
        throw Error ("errore fetch receipe non trovata") 
    }

return chef.birthDate
    

}

(async () => {
    try {
        const result = await getChefBirthday(1)
        console.log("La data di nascita dello chef è : ", result)
    } catch (error) {
        console.log(error)
    }

})()