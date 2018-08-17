import { Component } from '@angular/core';
import { Sandwich } from './models/sandwich.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  masterPageSelection: string = 'menu-page';
  masterMenuSelection: string = 'default';
  masterSandwichSelection: string = 'none';
  masterSandwichList: Sandwich[] =
  [
    new Sandwich(1, 'HAM & PROVOLONE', 'THE PEPE®', 1250, 350, 630, 710, ['lettuce', 'tomato', 'mayo'], 'classic'),
    new Sandwich(2, 'ORIGINAL ROAST BEEF', 'BIG JOHN®', 1070, 260, 540, 620, ['lettuce', 'tomato', 'mayo'], 'classic'),
    new Sandwich(8, 'ROAST BEEF, HAM & PROVOLONE', 'BILLY CLUB®', 1660, 440, 800, 830, ['Dijon', 'lettuce', 'tomato', 'mayo'], 'favorite')
  ];

  viewSelect(newView: string)
  {
    console.log(this.masterSandwichList[0].realName);
    this.masterPageSelection = newView;
    this.masterMenuSelection = 'default';
  }
  menuSelect(menuOption: string)
  {
    this.masterMenuSelection = menuOption;
  }
}
