import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAccordianComponent } from './menu-accordian.component';

describe('MenuAccordianComponent', () => {
  let component: MenuAccordianComponent;
  let fixture: ComponentFixture<MenuAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
