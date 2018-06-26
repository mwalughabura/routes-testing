import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { ProffesionalComponent } from './proffesional/proffesional.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ProffesionalComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
