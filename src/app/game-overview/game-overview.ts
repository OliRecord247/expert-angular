import { Component, inject, OnInit, signal } from '@angular/core';
import { GameItem } from './components/game-item';
import { GameService } from './services/games.service';

@Component({
  selector: 'app-game-overview',
  imports: [GameItem],
  templateUrl: './game-overview.html',
  styleUrl: './game-overview.css',
})
export class GameOverview implements OnInit {
  private gameService = inject(GameService);

  games = signal<{ id: string, title: string, description: string }[]>([]);

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      this.games.set(games.items.map(item => ({ id: item.id, title: item.name, description: item.description })));
    });
  }
}
