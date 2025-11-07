document.addEventListener("DOMContentLoaded", function () {
    console.log(window.location.origin)

    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            const icon = this.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }

    const btn = document.getElementById("btnLogin");
    const form = document.getElementById("form");

    btn.addEventListener("click", login)

    function login(event) {
        event.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (!username || !password) {
            Swal.fire({
                title: "ERROR",
                text: "Llena todos los campos",
                icon: "warning",
                background: '#1a1a1a',
                color: '#e0e0e0',
                confirmButtonColor: '#c00'
            });
            return;
        }

        // Efecto visual de carga
        const loginBtn = document.getElementById("btnLogin");
        loginBtn.style.background = 'linear-gradient(to right, #666666, #444444)';
        loginBtn.textContent = 'Verificando...';
        loginBtn.disabled = true;

        let user = {
            username: username,
            password: password,
        };

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la autenticación");
                }
                return response.text();
            })
            .then(data => {
                loginBtn.style.background = 'linear-gradient(to right, #008000, #006400)';
                loginBtn.textContent = '¡Acceso Concedido!';

                Swal.fire({
                    title: "Éxito",
                    text: data,
                    icon: "success",
                    background: '#1a1a1a',
                    color: '#e0e0e0',
                    confirmButtonColor: '#c00'
                });
                setTimeout(()=>{
                    window.location.href = `${window.location.origin}/S_Login/demo/static/inicio.html`
                }, 2000)
            })
            .catch(error => {
                // Efecto visual de error
                loginBtn.style.background = 'linear-gradient(to right, #800000, #400040)';
                loginBtn.textContent = '¡Error de Acceso!';

                setTimeout(() => {
                    loginBtn.style.background = 'linear-gradient(to right, #900000, #600060)';
                    loginBtn.textContent = 'Acceder al Inframundo';
                    loginBtn.disabled = false;
                }, 2000);

                Swal.fire({
                    title: "ERROR",
                    text: error.message,
                    icon: "error",
                    background: '#1a1a1a',
                    color: '#e0e0e0',
                    confirmButtonColor: '#c00'
                });
                console.error('Error:', error);
            });
    }
});