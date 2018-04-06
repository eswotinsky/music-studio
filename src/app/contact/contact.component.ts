import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  showMessage: boolean;
  submitted: boolean;

  constructor(public formBuilder: FormBuilder, private angularFire: AngularFireModule) { }

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

    const {firstName, lastName, phoneNumber, message} = this.contactForm.value;
    const date = Date();
    console.log(firstName, lastName, phoneNumber, message);

    let formRequest = {firstName, lastName, phoneNumber, message, date}

    this.angularFire.database.list('/messages').push(formRequest);
    this.contactForm.reset();

    this.submitted = true;
    if (this.contactForm.valid) {
      this.showMessage = true;
    }
  }

}
