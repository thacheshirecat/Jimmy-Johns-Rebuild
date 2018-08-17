import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  pageSelection: string = 'splash-page';

  viewSelect(newView: string)
  {
    this.pageSelection = newView;
  }
}
