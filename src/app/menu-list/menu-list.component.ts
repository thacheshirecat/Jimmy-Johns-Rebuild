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
  selectedSandwich: Sandwich;
  filterByType: string;

  constructor(private database: AngularFireDatabase)
  {
    this.sandwichList = database.list('sandwiches');
  }
  clickMenu(category: string)
  {
    this.filterByType = category;
    this.menuSelection = category;
    this.sandwichSelection = 'none';
    // this.menuClickSender.emit(category);
  }
  viewSandwich(sandwich)
  {
    this.selectedSandwich = sandwich;
    this.sandwichSelection = 'selected';
  }

  getSandwiches()
  {
    return this.sandwichList;
  }


  clickSandwich(sandwich: string)
  {
    this.sandwichSelection = sandwich;
  }
}
