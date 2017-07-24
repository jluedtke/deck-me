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

    if (cardType === "Creature") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].types[0] == cardType) {
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
        if (input[i].types[0] == cardType) {
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
