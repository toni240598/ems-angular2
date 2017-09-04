import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupStoreComponent } from './setup-store.component';

describe('SetupStoreComponent', () => {
  let component: SetupStoreComponent;
  let fixture: ComponentFixture<SetupStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
