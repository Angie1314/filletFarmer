import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { CowProfilesComponent } from './cow-profiles/cow-profiles.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: '',
  component: MainLandingPageComponent
}, {
  path: 'iconspage',
  component: IconsPageComponent
}
, {
  path: 'cowprofiles',
  component: CowProfilesComponent
}
, {
  path: 'aboutus',
  component: AboutUsComponent
}
, {
  path: 'contactus',
  component: ContactFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
