import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByType',
  pure: false
})
export class FilterByTypePipe implements PipeTransform {

  transform(input: any[], cardType: string) {
    if (!input) {
      return input;
    }
    let output: any[] = [];

    for (let x = 0; x < input.length; x++) {
        if (input[x].types == null) {
          input.splice(x, 1)
        }
    }

    if (cardType === "Creature") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].types[0] == cardType || input[i].types[1] == cardType) {
          output.push(input[i]);
        }
      }
    }
    else if (cardType === "Artifact") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].types[0] == cardType) {
          output.push(input[i]);
        }
      }
    }
    else if (cardType === "Enchantment") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].types[0] == cardType && input[i].types[1] != "Creature") {
          output.push(input[i]);
        }
      }
    }
    else if (cardType === "Instant") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].types[0] == cardType) {
          output.push(input[i]);
        }
      }
    }
    else if (cardType === "Sorcery") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].types[0] == cardType) {
          output.push(input[i]);
        }
      }
    }
    else if (cardType === "Planeswalker") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].types[0] == cardType) {
          output.push(input[i]);
        }
      }
    }
    else if (cardType === "Land") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].types[0] == cardType) {
          output.push(input[i]);
        }
      }
    }
    return output;
  }

}
