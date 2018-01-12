import { Component,OnInit } from '@angular/core';


// import  {FormGroup ,FormControl,Validators} from '@angular/forms';
/*use formBuilder instead of formControl*/
import  {FormGroup ,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    userForm:FormGroup;

   constructor(private _formBuilder:FormBuilder){

   }
   ngOnInit(){
    this.userForm=this._formBuilder.group({
     name:['said',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
     email:[],
     adress:this._formBuilder.group({
     	street:[],
     	city  :[],
     	codepostal:[null,Validators.pattern('[1-9][1-9]{4}$')]
     })
   

    });
   }

/*    userForm =new FormGroup({
     name : new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    email:new FormControl(),
    adress: new FormGroup({
      street    : new FormControl(),
      city      : new FormControl(),
      codepostal: new FormControl(null,Validators.pattern('[1-9][1-9]{4}$'))
    })

    });*/

    onSubmit(){
    	console.log(this.userForm.value)
    }
    

}
