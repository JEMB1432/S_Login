
let data = {
    username: "admin",
    password: "admin33"
}

 function saveData(event){
     fetch("/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then( response =>{
        return response.text();
    }).then(data => {
        console.log(data)
     }).catch(error => {
        console.log("ERROR", error)
    })
}

saveData()