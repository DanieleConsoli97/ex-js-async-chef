
async function getChefBirthday(id) {

    const promiseReceipes = await fetch(`https://dummyjson.com/recipes/${id}`)
    const receipes = await promiseReceipes.json()
    const promiseUsers = await fetch(`https://dummyjson.com/users/${receipes.id}`)
    const user = await promiseUsers.json()
    return users.birthDate

}

(async ()=>{
   try {
    const result = await getChefBirthday(1)
    console.log("La data di nascita dello chef è : ",result)
   } catch (error) {
    console.log(error)
   }
   
})()