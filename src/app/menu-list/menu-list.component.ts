import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sandwich } from './../models/sandwich.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent
{
  // @Input() childPageSelection: string;
  // @Input() childSandwichList: Sandwich[];
  // @Input() childMenuSelection: string;
  // @Input() childSandwichSelection: string;
  // @Output() menuClickSender = new EventEmitter();
  // @Output() sandwichClickSender = new EventEmitter();

  sandwichList: FirebaseListObservable<any[]>;
  menuSelection: string = 'default';
  sandwichSelection: string = 'none';
  filterByType: string;

  constructor(private database: AngularFireDatabase)
  {
    this.sandwichList = database.list('sandwiches');
  }

  getSandwiches()
  {
    return this.sandwichList;
  }

  clickMenu(category: string)
  {
    this.filterByType = category;
    this.menuSelection = category;
    // this.menuClickSender.emit(category);
  }
  clickSandwich(sandwich: string)
  {
    this.sandwichSelection = sandwich;
  }
}
