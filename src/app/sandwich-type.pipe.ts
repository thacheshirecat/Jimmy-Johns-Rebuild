import { Pipe, PipeTransform } from '@angular/core';
import { Sandwich } from './models/sandwich.model';

@Pipe
({
  name: "sandwichtype",
  pure: false
})

export class SandwichTypePipe implements PipeTransform
{
  transform(input: Sandwich[], selectedType)
  {
    let output: Sandwich[] = [];
    if(selectedType === "favorite")
    {
      for(let i = 0; i < input.length; i++)
      {
        if(input[i].type === "favorite")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(selectedType === "classic")
    {
      for(let i = 0; i < input.length; i++)
      {
        if(input[i].type === "classic")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(selectedType === "gargantuan")
    {
      for(let i = 0; i < input.length; i++)
      {
        if(input[i].type === "gargantuan")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(selectedType === "slim")
    {
      for(let i = 0; i < input.length; i++)
      {
        if(input[i].type === "slim")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
