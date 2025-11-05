package P1.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FormController {
    @PostMapping("/login")
    public String login(@RequestParam("username") String username, @RequestParam("password") String password) {
        if (username.isEmpty() || password.isEmpty()) {
            return "Llene correctamente los campos";
        }else  {
            if(username.equals("admin") && password.equals("admin")) {
                return "Inicio de sesion exitoso";
            }else  {
                return "Usuario y/o contraseña incorrectos";
            }
        }
    }
}
