import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  showMessage: boolean;
  submitted: boolean;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.showMessage = false;

    this.contactForm = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'phoneNumber': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g),
        Validators.minLength(7)
      ])],
      'message': [null, Validators.required]
    });
  }

  submitForm(value: any) {
    console.log(value);
    //still need to email value to owner

    this.submitted = true;
    if (this.contactForm.valid) {
      this.showMessage = true;
    }
  }

}
