import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Player} from '../model/Player';

@Injectable({ providedIn: 'root' })
export class PlayerService {

  baseurl = 'http://localhost:8080';
  players: Player[];

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Player>(this.baseurl + '/api/player/all')
      .subscribe(data => {
        for (const player of (data as any)) {
          this.players.push(player
            // id: player.id,
            // name: player.name,
            // dofusClass: player.dofusClass,
            // genre: player.genre,
            // rank: player.rank,
            // level: player.level,
            // background: player.background
          );
        }
    });
  }

  create(player: Player) {
    return null;
  }
}
