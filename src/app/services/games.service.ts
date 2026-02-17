import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root',
})
export class Games {
  private http = inject(HttpClient);

  getGames() {
    return this.http.get<{ items: Game[] }>('https://localhost:7086/games');
  }
}
