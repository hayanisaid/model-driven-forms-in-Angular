import { Component } from '@angular/core';
import  {FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    userForm =new FormGroup({
     name : new FormControl(),
    email:new FormControl(),
    adress: new FormGroup({
      street    : new FormControl(),
      city      : new FormControl(),
      codepostal: new FormControl()
    })

    });

    onSubmit(){
    	console.log(this.userForm.value)
    }
    

}
