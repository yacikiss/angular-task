import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../services/user.service';

import { User } from '../entities/user';

@Component({
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
    public user: User;
    public loading: boolean = true;

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

    ngOnInit(): void {
        this.getUser();
    }

    private getUser(): void {
        this.loading = true;
        let seed = this.activatedRoute.snapshot.params['seed'];
        this.userService.getUser(seed).subscribe(user => {
            this.user = user;
            this.loading = false;
        });
    }
}