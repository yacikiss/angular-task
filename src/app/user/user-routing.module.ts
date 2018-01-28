import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserViewComponent } from './user-view/user-view.compontent';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'users',
            component: UserListComponent
        },
        {
            path: 'user-view/:seed',
            component: UserViewComponent
        },
    ], )],
    exports: []
})
export class UserRoutingModule {}