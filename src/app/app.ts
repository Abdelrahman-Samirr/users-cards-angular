import { Component } from '@angular/core';
import { Cards } from './cards/cards';

@Component({
  selector: 'app-root',
  imports: [Cards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'users';
}
