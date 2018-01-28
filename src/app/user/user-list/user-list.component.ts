import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../entities/user';
import { Router } from '@angular/router';

@Component({
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    private users: Array<User>;
    public loading: boolean = true;
    private currentUser: User;

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit(): void {
        this.getUsers();
    }

    public onClickEdit(user: User): void {
        if (!this.currentUser) {
            this.currentUser = user;
            user.readonly = false;
            return;
        }

        if (this.currentUser === user && user.readonly) {
            user.readonly = !user.readonly;
        } else {
            user.readonly = false;
            this.currentUser.readonly = true;
            this.currentUser = user;
        }
    }

    public onClickRemove(user: User): void {
        let index = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }

    private getUsers(): void {
        this.loading = true;
        this.userService.getRandomUsers().subscribe(users => {
            this.users = users;
            this.loading = false;
        });
    }

    public onClickName(seed: string) {
        this.router.navigate([`/user-view/${seed}`]);
    }
}

