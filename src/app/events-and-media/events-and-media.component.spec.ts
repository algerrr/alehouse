import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAndMediaComponent } from './events-and-media.component';

describe('EventsAndMediaComponent', () => {
  let component: EventsAndMediaComponent;
  let fixture: ComponentFixture<EventsAndMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsAndMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAndMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
