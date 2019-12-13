import {User} from '../model/User';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return null;
  }

  register(user: User) {
    return null;
  }

  delete(id: number) {
    return null;
  }
}
