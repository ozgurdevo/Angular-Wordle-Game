import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { KeyboardComponent } from '../wordle/keyboard/keyboard.component';
import { LetterGridComponent } from '../wordle/letter-grid/letter-grid.component';
import { LetterComponent } from '../wordle/letter/letter.component';
import { WordleRootComponent } from '../wordle/wordle-root/wordle-root.component';
import { StoreModule } from '@ngrx/store';
import { wordleGridReducer } from './store/reducers';
import { HideEmptyLetterPipe } from './pipes/hide.pipe';
import { KeyComponent } from '../wordle/key/key.component';

@NgModule({
  declarations: [
    HeaderComponent,
    KeyboardComponent,
    LetterGridComponent,
    WordleRootComponent,
    LetterComponent,
    HideEmptyLetterPipe,
    KeyComponent
  ],
  imports: [CommonModule, StoreModule.forRoot({ game: wordleGridReducer })],
  exports: [
    FormsModule,
    HeaderComponent,
    KeyboardComponent,
    LetterGridComponent,
    WordleRootComponent,
    LetterComponent,
  ],
})
export class SharedModule {}
