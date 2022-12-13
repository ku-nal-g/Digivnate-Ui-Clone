import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsabilityTestingComponent } from './usability-testing.component';

describe('UsabilityTestingComponent', () => {
  let component: UsabilityTestingComponent;
  let fixture: ComponentFixture<UsabilityTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsabilityTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsabilityTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
