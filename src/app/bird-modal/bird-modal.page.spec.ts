import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdModalPage } from './bird-modal.page';

describe('BirdModalPage', () => {
  let component: BirdModalPage;
  let fixture: ComponentFixture<BirdModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
