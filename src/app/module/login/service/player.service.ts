import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Player} from '../model/Player';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  constructor(private http: HttpClient) { }

  getAll() {
    return null;
  }

  save(player: Player) {
    return null;
  }
}
