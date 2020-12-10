import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminLibComponent } from './admin-lib/admin-lib.component';
import { UserLibComponent } from './user-lib/user-lib.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { AboutComponent } from './about/about.component';
import { IssueComponent } from './issue/issue.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-lib', component: AdminLibComponent },
  { path: 'user-lib', component: UserLibComponent },
  {​​​​​​​ path: 'create', component: CreateComponent }​​​​​​​,
  {​​​​​​​ path: 'update', component: UpdateComponent }​​​​​​​,
  {​​​​​​​ path: 'about', component: AboutComponent }​​​​​​​,
  {​​​​​​​ path: 'issue', component: IssueComponent }​​​​​​​,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
