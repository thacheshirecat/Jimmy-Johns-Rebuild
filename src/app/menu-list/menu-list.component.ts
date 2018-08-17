import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent
{
  @Input() childPageSelection: string;
  @Output() clickSender = new EventEmitter();

  clickMenu(category: string)
  {
    this.clickSender.emit(category);
  }
}
