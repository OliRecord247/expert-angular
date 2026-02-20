import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import  {MatButtonModule } from '@angular/material/button';

import { GameItem } from './components/game-item';
import { GameCreationDialog } from './components/game-creation-dialog';
import { GameService } from './services/games.service';

@Component({
  selector: 'app-game-overview',
  imports: [GameItem, MatButtonModule],
  templateUrl: './game-overview.html',
  styleUrl: './game-overview.css',
})
export class GameOverview implements OnInit {
  private readonly dialog = inject(MatDialog);
  private gameService = inject(GameService);

  games = signal<{ id: string, title: string, description: string }[]>([]);

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      this.games.set(games.items.map(item => ({ id: item.id, title: item.name, description: item.description })));
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(GameCreationDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The form data received:', result);
      }
    });
  }
}
