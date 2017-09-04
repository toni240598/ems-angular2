import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupProvinceComponent } from './setup-province.component';

describe('SetupProvinceComponent', () => {
  let component: SetupProvinceComponent;
  let fixture: ComponentFixture<SetupProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
