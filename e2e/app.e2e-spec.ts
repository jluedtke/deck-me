import { DeckMePage } from './app.po';

describe('deck-me App', () => {
  let page: DeckMePage;

  beforeEach(() => {
    page = new DeckMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
