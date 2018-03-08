import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodanddrinksComponent } from './foodanddrinks.component';

describe('FoodanddrinksComponent', () => {
  let component: FoodanddrinksComponent;
  let fixture: ComponentFixture<FoodanddrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodanddrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodanddrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
