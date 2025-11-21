package P1.demo.Service;

import P1.demo.DTOs.NewLoginRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class NewLoginService {
    public ResponseEntity login(@RequestBody NewLoginRequest newLoginRequest) {
        if(newLoginRequest.getUsername().equals("admin") && newLoginRequest.getPassword().equals("admin")){
            return new ResponseEntity<>("Login Successful", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("Login Failed", HttpStatus.UNAUTHORIZED);
        }
    }
}
