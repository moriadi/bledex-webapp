import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/models/user';
import { ChangePassword } from '@app/models/changepasword';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    create(user: User) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/users`, user)
    }

    update(user: User) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/users/${user.id}`, user)
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/api/users/${id}`);
    }

    changepassword(changepassword: ChangePassword) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/users/changepassword`, changepassword)
    }
}