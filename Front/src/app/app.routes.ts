import { Routes } from '@angular/router';
import { ReflectionComponent } from './features/reflections/pages/reflection.component';
import { ConsignaComponent } from './shared/components/consigna/consigna.component';
import { reflectionGuardGuard } from './core/guards/reflection-guard.guard';

export const routes: Routes = [
    {
        path: 'reflections',
        component: ReflectionComponent,
        canActivate: [reflectionGuardGuard]
    },
    {
        path: 'consigna',
        component: ConsignaComponent,
    },
    {
        path: '',
        redirectTo: 'consigna',
        pathMatch: 'full'
    }
];
