import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent
{
  @Input() childPageSelection: string;
}
