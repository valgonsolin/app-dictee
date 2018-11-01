import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureGeneraleComponent } from './culture-generale.component';

describe('CultureGeneraleComponent', () => {
  let component: CultureGeneraleComponent;
  let fixture: ComponentFixture<CultureGeneraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureGeneraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
