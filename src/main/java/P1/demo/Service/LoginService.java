package P1.demo.Service;

import P1.demo.DTOs.LoginRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class LoginService {
    public ResponseEntity login(@RequestBody LoginRequest loginRequest) {

        if (loginRequest.getUsername().isEmpty() || loginRequest.getPassword().isEmpty()) {
            return new  ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }else  {
            if(loginRequest.getUsername().equals("admin") && loginRequest.getPassword().equals("admin")) {
                return new ResponseEntity<>("Inicio de sesion exitoso",HttpStatus.OK);
            }else  {
                return  new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        }
    }
}
