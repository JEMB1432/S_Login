package P1.demo;

import P1.demo.DTOs.NewLoginRequest;
import P1.demo.Service.NewLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin (origins = "*")
@RestController
public class NewFormController {
    @Autowired
    NewLoginService newLoginService;

    @PostMapping("/login2")
    public ResponseEntity login(@RequestBody NewLoginRequest newLoginRequest) {
        return newLoginService.login(newLoginRequest);
    }
}
