import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-game';
  randomText = faker.lorem.sentence();
  enteredText = '';

  onInputChange(value: string) {
    this.enteredText = value;
  }
}
