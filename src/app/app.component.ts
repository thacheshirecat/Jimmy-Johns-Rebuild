import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  masterPageSelection: string = 'menu-page';

  viewSelect(newView: string)
  {
    this.masterPageSelection = newView;
  }
}
