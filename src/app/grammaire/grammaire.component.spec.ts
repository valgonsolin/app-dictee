import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammaireComponent } from './grammaire.component';

describe('GrammaireComponent', () => {
  let component: GrammaireComponent;
  let fixture: ComponentFixture<GrammaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
