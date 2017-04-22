import { Routes } from '@angular/router';
import {NewestCasinosComponent} from "./newest-casinos/newest-casinos.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";

export const rootRouterConfig: Routes = [
  { path: 'newest', component: NewestCasinosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
