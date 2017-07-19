import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDeckFormComponent } from './export-deck-form.component';

describe('ExportDeckFormComponent', () => {
  let component: ExportDeckFormComponent;
  let fixture: ComponentFixture<ExportDeckFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportDeckFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDeckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
