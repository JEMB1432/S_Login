package P1.demo.Service;

import P1.demo.DTOs.FormRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class FormService {
    public ResponseEntity saveData(@RequestBody FormRequest formRequest) {
        return new ResponseEntity<>(formRequest, HttpStatus.OK);
    }
}
