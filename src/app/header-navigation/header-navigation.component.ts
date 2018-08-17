import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent
{
  @Output() clickSender = new EventEmitter();

  changeViewClicked(newView: string)
  {
    this.clickSender.emit(newView);
  }
}
