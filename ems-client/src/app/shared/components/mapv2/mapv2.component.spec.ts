import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapv2Component } from './mapv2.component';

describe('Mapv2Component', () => {
  let component: Mapv2Component;
  let fixture: ComponentFixture<Mapv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mapv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
