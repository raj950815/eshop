import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { userRoutes } from './user.routes'
import { LoginComponent } from './login/login.component';
import { UserService } from './shared/user.service';

@NgModule({
  imports: [
    CommonModule,
	FormsModule,
        ReactiveFormsModule,
	RouterModule.forChild(userRoutes)
  ],
  declarations: [
	LoginComponent
],

})
export class UserModule { }
