export class Card {
  constructor (
    public name: string,
    public manaCost: string,
    public cmc: number,
    public colors: string[],
    public colorIdentity: string[],
    public type: string,
    public types: string[],
    public subtypes: string[],
    public rarity: string,
    public set: string,
    public setName: string,
    public text: string,
    public flavor: string,
    public artist: string,
    public power: string,
    public toughness: string,
    public layout: string,
    public imageUrl: string,
    public multiverseid: number,
    public legalities: any[], //[{format, legality}, {format, legality}]
  ) {}
}
