import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { T001TailwindInitComponent } from './components/t001-tailwind-init/t001-tailwind-init.component';
import { T000HomeComponent } from './components/t000-home/t000-home.component';
import { T002TailwindTextComponent } from './components/t002-tailwind-text/t002-tailwind-text.component';

export const routes: Routes = [
    {
        path: '',
        component: T000HomeComponent
    },
    {
        path: '001-Init',
        component: T001TailwindInitComponent
    },
    {
        path: '002-Text',
        component: T002TailwindTextComponent
    }
];
