import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators ,FormBuilder, ValidationErrors, MinLengthValidator} from '@angular/forms';

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {
  registrationForm;
  
 
  constructor(private builder:FormBuilder) {
    this.registrationForm = builder.group({
      username:["" , [Validators.required , Validators.minLength(3)]],// form control
      last_name:"",
      
    });// return a formgroup
   }

  ngOnInit(): void {
  }
onSubmit()
{
  console.log(this.registrationForm.value)!;
}
//Getters
get usernameControl()
{
  return this.registrationForm.get('username')!;
}
}