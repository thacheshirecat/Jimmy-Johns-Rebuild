import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sandwich } from './../models/sandwich.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent
{
  @Input() childPageSelection: string;
  @Input() childMenuSelection: string;
  @Input() childSandwichList: Sandwich[];
  @Input() childSandwichSelection: string;
  @Output() menuClickSender = new EventEmitter();
  @Output() sandwichClickSender = new EventEmitter();

  clickMenu(category: string)
  {
    this.menuClickSender.emit(category);
  }
  clickSandwich(sandwich: string)
  {
    this.sandwichClickSender.emit(sandwich);
  }
}
