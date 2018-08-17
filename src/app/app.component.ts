import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  masterPageSelection: string = 'menu-page';
  masterMenuSelection: string = 'default';

  viewSelect(newView: string)
  {
    this.masterPageSelection = newView;
  }
}
