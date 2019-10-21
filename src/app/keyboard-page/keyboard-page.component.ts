import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-keyboard-page',
  templateUrl: './keyboard-page.component.html',
  styleUrls: ['./keyboard-page.component.scss']
})
export class KeyboardPageComponent implements OnInit {
contactForm: FormGroup;
disabledSubmitButton = true;
optionsSelect: Array<any>;

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}

// import { ConnectionService } from './connection.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Component, HostListener } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {

// contactForm: FormGroup;
// disabledSubmitButton: boolean = true;
// optionsSelect: Array<any>;

//   @HostListener('input') oninput() {

//   if (this.contactForm.valid) {
//     this.disabledSubmitButton = false;
//     }
//   }

//   constructor(private fb: FormBuilder, private connectionService: ConnectionService) {

//   this.contactForm = fb.group({
//     'contactFormName': ['', Validators.required],
//     'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
//     'contactFormSubjects': ['', Validators.required],
//     'contactFormMessage': ['', Validators.required],
//     'contactFormCopy': [''],
//     });
//   }

//   onSubmit() {
//     this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
//       alert('Your message has been sent.');
//       this.contactForm.reset();
//       this.disabledSubmitButton = true;
//     }, error => {
//       console.log('Error', error);
//     });
//   }

//   }