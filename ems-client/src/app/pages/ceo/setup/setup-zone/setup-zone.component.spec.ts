import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupZoneComponent } from './setup-zone.component';

describe('SetupZoneComponent', () => {
  let component: SetupZoneComponent;
  let fixture: ComponentFixture<SetupZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
