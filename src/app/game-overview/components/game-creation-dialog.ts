import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GameService, CreateGame } from '../services/games.service';

@Component({
  selector: 'app-game-creation-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  template: `
    <h2 mat-dialog-title>Create New Game</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="dialog-form" (ngSubmit)="submit()">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Game Name</mat-label>
          <input matInput formControlName="name" placeholder="Ex. Friday Night Magic">
          @if (form.controls.name.hasError('required')) {
            <mat-error>Name is required</mat-error>
          }
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description</mat-label>
          <textarea matInput formControlName="description" placeholder="Game description..."></textarea>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Release Date</mat-label>
          <input matInput [matDatepicker]="picker" formControlName="releaseDate">
          <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Play Hours</mat-label>
          <input matInput type="number" formControlName="playHours" min="0">
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button color="primary" (click)="submit()" [disabled]="form.invalid">Create</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .full-width {
      width: 100%;
    }
    .dialog-form {
      display: flex;
      flex-direction: column;
      padding-top: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCreationDialog {
  private readonly dialogRef = inject(MatDialogRef<GameCreationDialog>);
  private readonly fb = inject(FormBuilder);
  private gameService = inject(GameService);
  

  protected readonly form = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    releaseDate: [new Date(), Validators.required],
    playHours: [1, [Validators.required, Validators.min(1)]],
  });

  protected submit(): void {
    if (this.form.valid) {
      this.gameService.addGame(this.form.value as CreateGame).subscribe(() => {
        this.dialogRef.close(this.form.value);
      });
    }
  }
}