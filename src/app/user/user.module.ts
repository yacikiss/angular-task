import { NgModule } from '@angular/core';

import { UserRoutingModule }from './user-routing.module';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UserService } from './services/user.service';

import { UserViewComponent } from './user-view/user-view.compontent';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    imports: [CommonModule, UserRoutingModule, HttpModule],
    exports: [],
    providers: [UserService],
    declarations: [
        UserViewComponent,
        UserListComponent
    ]
})
export class UserModule {

}