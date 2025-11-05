document.addEventListener("DOMContentLoaded", function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let btn = document.getElementById("btnLogin");
    btn.addEventListener("click", login)

    function login(event){
        if (username && password) {
            alert("Llene correctamente los campos");
        }
        /*else {
            let user = {
                username: username,
                password: password,
            }
            fetch('http://localhost:8080/login', {
                method: 'POST',
                body: JSON.stringify({
                    titulo: 'login',
                    cuerpo: user,
                    userId: 1
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(err => console.error('Error:', err));
        }*/
    }
})