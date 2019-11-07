import { Component, OnInit } from '@angular/core';
export class Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
}
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  // model = new Contact();
  submitted = false;
  error: {};
  constructor(
    // private router: Router,
    // private cmspageService: CmspageService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    // return this.cmspageService.contactForm(this.model).subscribe(
    //   data => this.model = data,
    //   error => this.error = error
    // );
  }

  gotoHome() {
    // this.router.navigate(['/']);
  }
}
