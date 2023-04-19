import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HamburgerComponent } from './components/navbar/hamburger/hamburger.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HamburgerComponent,
    HeroComponent,
    ServicesComponent,
    BenefitsComponent,
    CommentsComponent,
    ContactComponent,
    FaqComponent,
    FooterComponent,
    ScrollToTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
