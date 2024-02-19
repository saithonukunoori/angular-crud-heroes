import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { CreateComponent } from './components/create/create.component';


export const routes: Routes = [
    {path: "heroes", component: HeroesComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'detail/:id', component: HeroDetailComponent },
    {path: "create", component: CreateComponent}

  ];
