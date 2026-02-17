import { Component, input } from '@angular/core';

type Game = {
  title: string;
  description: string;
};

@Component({
  selector: 'game-item',
  imports: [],
  template: `
    <div class="game-card">
      <h3>{{ game().title }}</h3>
      <p>{{ game().description }}</p>
    </div>
  `,
  styles: `
    .movie-card { border: 1px solid #ddd; border-radius: 8px; padding: 15px; }
  `
})
export class GameItem {
  game = input.required<Game>();
}
