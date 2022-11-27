import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';

const routes: Routes = [
  { path: '', component: RegistrationFormComponent },
  { path: 'logIn', component: SignInFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
