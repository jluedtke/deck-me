import { Injectable } from '@angular/core';
import { FirebaseToAppService } from './firebase-to-app.service';

@Injectable()
export class AdriansService {

  constructor(public fbaService: FirebaseToAppService) { }

  getCardTypes(deck: any) {
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
      } else if (deck[i].types[1] === 'Land') {
        land += 1;
      } else if (deck[i].types[1] === 'Creature') {
        creature += 1;
      } else if (deck[i].types[1] === 'Enchantment') {
        enchantment += 1;
      } else if (deck[i].types[1] === 'Instant') {
        instant += 1;
      } else if (deck[i].types[1] === 'Sorcery') {
        sorcery += 1;
      } else if (deck[i].types[1] === 'Artifact') {
        artifact += 1;
      } else if (deck[i].types[1] === 'Planeswalker') {
        planeswalker += 1;
      } else {}

    }
    let result: number[] = [land, creature, enchantment, instant, sorcery, artifact, planeswalker];
    return result;
  }

  getCardColors(deck:any) {
    let white: number = 0;
    let blue: number = 0;
    let red: number = 0;
    let green: number = 0;
    let black: number = 0;
    let duals: number = 0;
    for (let i=0; i<deck.length; i++) {
      if (deck[i].colors) {
        if (deck[i].colors.length == 1) {

          if (deck[i].colors[0] === 'White') {
          white += 1;
        } else if (deck[i].colors[0] === 'Black') {
          black += 1;
        } else if (deck[i].colors[0] === 'Red') {
          red += 1;
        } else if (deck[i].colors[0] === 'Green') {
          green += 1;
        } else if (deck[i].colors[0] === 'Blue') {
          blue += 1;
        } else {}
      } else {
        duals += 1;
      }
    }
    }
    let result: number[] = [red, blue, duals, white, green, black];
    return result;
  }

  getCardRarity(deck: any) {
    let mythic: number = 0;
    let rare: number = 0;
    let uncommon: number = 0;
    let common: number = 0;
    for (let i = 0; i < deck.length; i++) {
      if (deck[i].rarity) {
        if (deck[i].rarity === 'Mythic Rare') {
          mythic += 1;
        } else if (deck[i].rarity === 'Rare') {
          rare += 1;
        } else if (deck[i].rarity === 'Uncommon') {
          uncommon += 1;
        } else if (deck[i].rarity === 'Common') {
          common += 1;
        } else {}
      }
    }
    let result: number[] = [mythic, rare, uncommon, common];
    return result;
  }

  getCardManaCost(cards: any[]) {
    if (!cards) {
      let result: number[] = [1, 1, 1, 1, 1, 1, 1, 1];
      return result;
    } else if (cards.length < 1) {
      let result: number[] = [1, 1, 1, 1, 1, 1, 1, 1];
      return result;
    } else {
      let mana0: number = 0;
      let mana1: number = 0;
      let mana2: number = 0;
      let mana3: number = 0;
      let mana4: number = 0;
      let mana5: number = 0;
      let mana6: number = 0;
      let mana7: number = 0;
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].cmc == 0) {
          mana0++
        } else if (cards[i].cmc == 1) {
          mana1++
        } else if (cards[i].cmc == 2) {
          mana2++
        } else if (cards[i].cmc == 3) {
          mana3++
        } else if (cards[i].cmc == 4) {
          mana4++
        } else if (cards[i].cmc == 5) {
          mana5++
        } else if (cards[i].cmc == 6) {
          mana6++
        } else {
          if (cards[i].types[0] !== 'Land') {
            mana7++
          }
        }
      }
      let result: number[] = [mana0, mana1, mana2, mana3, mana4, mana5, mana6, mana7];
      return result;
    }
  }
}
