import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { routing } from '../app.routing';
import { SecurityRoutingModule } from './security.routing';

import { SharedModule } from '../shared/shared.module'; 

import { AccountService } from './shared/account.service';

import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { SecurityComponent } from './security.component';


import { ChangePasswordComponent } from './changePassword/change-password.component';
import { RegistrationTypeComponent } from './registration-type/registration-type.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import {DialogModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SecurityRoutingModule,
        //routing,
        SharedModule,
        DialogModule,
    ],
    declarations: [
        UserPermissionsComponent,
        UserGroupsComponent,
        SecurityComponent,
        ChangePasswordComponent,
        RegistrationTypeComponent,
        ResetPasswordComponent
    ],
    providers: [],
    exports: [ 
        UserPermissionsComponent,
        UserGroupsComponent,
        SecurityComponent,
        ChangePasswordComponent,
        RegistrationTypeComponent,
        ResetPasswordComponent
    ]
})
export class SecurityModule { }
