import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckbuilderComponent } from './deckbuilder.component';

describe('DeckbuilderComponent', () => {
  let component: DeckbuilderComponent;
  let fixture: ComponentFixture<DeckbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
