import { Injectable } from '@angular/core';
import { FirebaseToAppService } from './firebase-to-app.service';

@Injectable()
export class AdriansService {

  constructor(public fbaService: FirebaseToAppService) { }

  getCardTypes(deck: any) {
    console.log(deck);
    let land: number = 0;
    let creature: number = 0;
    let enchantment: number = 0;
    let instant: number = 0;
    let sorcery: number = 0;
    let artifact: number = 0;
    let planeswalker: number = 0;
    for (let i = 0; i < deck.length; i++) {
      if (deck[i].types[0] == 'Land') {
        land += 1;
      } else if (deck[i].types[0] === 'Creature') {
        creature += 1;
      } else if (deck[i].types[0] === 'Enchantment') {
        enchantment += 1;
      } else if (deck[i].types[0] === 'Instant') {
        instant += 1;
      } else if (deck[i].types[0] === 'Sorcery') {
        sorcery += 1;
      } else if (deck[i].types[0] === 'Artifact') {
        artifact += 1;
      } else if (deck[i].types[0] === 'Planeswalker') {
        planeswalker += 1;
      } else { }
    }
    let result: number[] = [land, creature, enchantment, instant, sorcery, artifact, planeswalker];
    console.log(result);
    return result;
  }
}
