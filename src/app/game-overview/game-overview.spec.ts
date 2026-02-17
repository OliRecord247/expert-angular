import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverview } from './game-overview';

describe('GameOverview', () => {
  let component: GameOverview;
  let fixture: ComponentFixture<GameOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
