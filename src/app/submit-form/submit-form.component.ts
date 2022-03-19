import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
// import { Firestore } from '@angular/fire/firestore';
import { tap, first } from 'rxjs';

@Component({
  selector: 'submit-form',
  templateUrl: './submit-form.component.html',
  styles: [],
})
export class SubmitFormComponent implements OnInit {
  myForm: FormGroup;
  // Form state
  loading: boolean = false;
  success: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });

    this.myForm.valueChanges.subscribe(console.log);
    console.log('My Form ', this.myForm);
  }

  async submitHandler() {
    this.loading = true;
    const formValue = this.myForm;
    console.log('formValue ', formValue);
  }
}
