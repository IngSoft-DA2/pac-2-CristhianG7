import { Routes } from '@angular/router';
import { ReflectionComponent } from './features/reflections/pages/reflection.component';
import { ConsignaComponent } from './shared/components/consigna/consigna.component';

export const routes: Routes = [
    {
        path: 'reflections',
        component: ReflectionComponent
    },
    {
        path: 'consigna',
        component: ConsignaComponent
    },
    {
        path: '',
        redirectTo: 'consigna',
        pathMatch: 'full'
    }
];
