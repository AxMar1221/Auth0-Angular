import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ProtectedComponent } from './components/protected/protected.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
