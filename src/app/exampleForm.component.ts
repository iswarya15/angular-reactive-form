import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'exampleForm',
  templateUrl: 'exampleForm.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ExampleFormComponent  {
  @Input() name: string;
  myForm: FormGroup;
  constructor(private fb: FormBuilder){ }

ngOnInit(){
  this.myForm = this.fb.group({
    email: ['',[
      Validators.required,
      Validators.email
    ]],
    password: ['',[
      Validators.required,
      // patter for atleast 1 lowecase, 1 uppercase, 1 number, minLength of 8
      Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
    ]],
    age: [null, [
      Validators.required,
      Validators.minLength(2),
      Validators.min(18),
      Validators.max(65)
    ]],
    agree: [false,[
      Validators.requiredTrue
    ]]
  })
  this.myForm.valueChanges.subscribe(console.log)
  console.log('My Form ',this.myForm)
}

get email(){
  // console.log('Email check',this.myForm.get('email'))
  return this.myForm.get('email') as FormControl;
}

get password(){
  // console.log('My Form ',this.myForm)
  return this.myForm.get('password') as FormControl;
  
}

get age(){
  // console.log('Age check', this.myForm.get('age'))
  return this.myForm.get('age') as FormControl;
}

get agree(){
  // console.log('Agree check',this.myForm.get('agree'))
  return this.myForm.get('agree') as FormControl;
  
}
}
