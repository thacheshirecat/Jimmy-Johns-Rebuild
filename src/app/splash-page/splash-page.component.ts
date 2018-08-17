import { Component, Input } from '@angular/core';
import { Sandwich } from './../models/sandwich.model';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent
{
  @Input() childPageSelection: string;
}
