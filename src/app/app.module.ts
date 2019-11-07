import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { LoginComponent } from './login/login.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PhrasesKeyboardComponent } from './phrases-keyboard/phrases-keyboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CowProfilesComponent } from './cow-profiles/cow-profiles.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLandingPageComponent,
    IconsPageComponent,
    NavBarComponent,
    PhrasesKeyboardComponent,
    CowProfilesComponent,
    AboutUsComponent,
    ContactFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
