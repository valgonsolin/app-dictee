import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicteeDescriptionComponent } from './dictee-description.component';

describe('DicteeDescriptionComponent', () => {
  let component: DicteeDescriptionComponent;
  let fixture: ComponentFixture<DicteeDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicteeDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicteeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
