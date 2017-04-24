import { Routes } from '@angular/router';
import {NewestCasinosComponent} from "./newest-casinos/newest-casinos.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {RecommendedBonusesComponent} from "./recommended-bonuses/recommended-bonuses.component";
import {EditNewestComponent} from "./edit-newest-component/edit-newest-component";
import {AddNewestComponent} from "./add-newest/add-newest.component";
import {NewestComponent} from "./newest/newest.component";
import {MembersComponent} from "./members/members.component";
import {AuthGuard} from "./auth.service";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  {path:'members/:id', component:NewestComponent, canActivate: [AuthGuard]},
  { path: 'add-listing', component: AddNewestComponent, canActivate: [AuthGuard] },
  {path:'edit-newest/:id', component:EditNewestComponent, canActivate: [AuthGuard]},

  { path: 'bonuses', component: RecommendedBonusesComponent, canActivate: [AuthGuard] },

];
