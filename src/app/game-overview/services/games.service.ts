import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game.model';

type GamesReponse = { items: Game[] };

export type CreateGame = {
  name: string;
  description: string;
  releaseDate: Date;
  playHours: number;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private http = inject(HttpClient);

  getGames() {
    return this.http.get<GamesReponse>('https://localhost:7086/games');
  }

  addGame(game: CreateGame) {
    return this.http.post('https://localhost:7086/games', game);
  }
}
