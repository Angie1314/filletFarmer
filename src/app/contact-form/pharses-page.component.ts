import { OnInit } from '@angular/core';
// import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-pharses-page',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class PharsesPageComponent  {

  contactForm: FormGroup;
  disabledSubmitButton: boolean;

  optionsSelect: Array<any>;

  @HostListener('input') oninput() {
    this.disabledSubmitButton = true;
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder) {

    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', Validators.compose([Validators.required, Validators.email])],
      contactFormSubjects: ['', Validators.required],
      contactFormMessage: ['', Validators.required],
      contactFormCopy: [''],
    });
  }

  onSubmit() {
  //   this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
  //     alert('Your message has been sent.');
  //     this.contactForm.reset();
  //     this.disabledSubmitButton = true;
  //   }, error => {
  //     console.log('Error', error);
  //   });
  // }

}
}
