import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckChartComponent } from './deck-chart.component';

describe('DeckChartComponent', () => {
  let component: DeckChartComponent;
  let fixture: ComponentFixture<DeckChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
