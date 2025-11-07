const camposObligatorios = document.querySelectorAll(".mandatory");

const btn = document.getElementById("btnLogin");
btn.addEventListener("click", saveData);

btn.addEventListener("click", saveData)

let complete = false;

for (let campo of camposObligatorios){
    campo.addEventListener("input", (e)=>{
        e.preventDefault()
        if(campo.value.length === 0){
            campo.classList.add("is-invalid");
            campo.classList.remove("is-valid");
        }else {
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid");
            complete = true;
        }
    })
}

function saveData(event){
    event.preventDefault()
    if(complete){
        let content = {
            username: "JEE",
            name: event.target.dataset.name,
            lastname: event.target.dataset.lastname,
            email: event.target.dataset.email,
        }

        fetch('http://localhost:8080/Save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la autenticación");
                }
                return response.text();
            })
            .then(data => {
                Swal.fire({
                    title: "Éxito",
                    text: data,
                    icon: "success",
                });
            })
            .catch(error => {
                Swal.fire({
                    title: "ERROR",
                    text: error.message,
                    icon: "error",
                });
                console.error('Error:', error);
            });
    }
}

