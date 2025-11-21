package P1.demo;

import P1.demo.DTOs.FormRequest;
import P1.demo.DTOs.LoginRequest;
import P1.demo.Service.FormService;
import P1.demo.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class FormController {
    @Autowired
    private LoginService loginService;

    @Autowired
    private FormService formService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequest loginRequest) {
        return loginService.login(loginRequest);
    }

    @PostMapping("/Save")
    public ResponseEntity save(@RequestBody FormRequest formRequest) {
        return formService.saveData(formRequest);
    }
}
