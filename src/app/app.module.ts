import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UsabilityTestingComponent } from './components/usability-testing/usability-testing.component';
import { UsabilityTestingPartnersComponent } from './components/usability-testing-partners/usability-testing-partners.component';
import { FaqComponent } from './components/faq/faq.component';
import { InterestedComponent } from './components/interested/interested.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsabilityTestingComponent,
    UsabilityTestingPartnersComponent,
    FaqComponent,
    InterestedComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
