import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { ProffesionalComponent } from './proffesional/proffesional.component';
import { AboutComponent } from './about/about.component';

export const router: Routes = [
    {path: '', redirectTo: 'about', pathMatch: 'full' },
    {path: 'about', component: AboutComponent },
    {path: 'proffesional', component: ProffesionalComponent },
    {path: 'personal', component: PersonalComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
