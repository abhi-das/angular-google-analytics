import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcarComponent } from './springcar.component';

describe('SpringcarComponent', () => {
  let component: SpringcarComponent;
  let fixture: ComponentFixture<SpringcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
