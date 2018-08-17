import { Pipe, PipeTransform } from '@angular/core';
import { Sandwich } from './models/sandwich.model';

@Pipe
({
  name: "sandwichtype",
  pure: false
})

export class SandwichTypePipe implements PipeTransform
{
  transform()
  {

  }
}
