import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private http: HttpClient) { }

  getAll() {
    return null;
  }
}
