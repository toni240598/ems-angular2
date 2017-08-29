import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAlarmComponent } from './store-alarm.component';

describe('StoreAlarmComponent', () => {
  let component: StoreAlarmComponent;
  let fixture: ComponentFixture<StoreAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
