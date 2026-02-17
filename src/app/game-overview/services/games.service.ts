import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game.model';

type GamesReponse = { items: Game[] };

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private http = inject(HttpClient);

  getGames() {
    return this.http.get<GamesReponse>('https://localhost:7086/games');
  }
}
