import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  SendMessageForm: FormGroup;

  constructor(private oFormBuilder: FormBuilder) { }

  ngOnInit() {
    this.SendMessageForm = this.oFormBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        name: [null, [Validators.required]],
        phoneNumber: [null, [Validators.required]],
        message: [null, [Validators.required]],
      });
  }
  SendMessageForm_Submit() {
    console.log('this.form value =', this.SendMessageForm.value)
  }

}
