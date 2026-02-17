import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameOverview } from './game-overview/game-overview';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameOverview],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-fiesta');
}
