import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../entities/User';

@Injectable()
export class UserService {
    private url: string = 'https://randomuser.me/api';

    constructor(private http: Http) {
    }

    public getRandomUsers(count: Number = 10): Observable<User[]> {
        try {
            let url = this.url + `?results=${count}`;
            return this.http.get(url).map(response => {
                return this.getMappedUsers(response.json());
            });
        } catch (error) {
            return new Observable<User[]>();
        }
    }

    public getUser(seed: string): Observable<User> {
        try {
            let url = this.url + `?seed=${seed}`;
            return this.http.get(url).map(response => {
                return this.getMappedUsers(response.json())[0];
            });
        } catch (exception) {
            console.error(exception);
            return new Observable<User>();
        }
    }

    private getMappedUsers(rawData: any): Array<User> {
        if (!rawData) {
            return [];
        };
        let seed = rawData.info.seed;
        return rawData.results.map((user: any) => {
            return {
                dob: user.dob,
                email: user.email,
                name: seed,
                phone: user.phone,
                picture: user.picture.large,
                id: user.login.md5,
                readonly: true
            } as User;
        });
    }
}