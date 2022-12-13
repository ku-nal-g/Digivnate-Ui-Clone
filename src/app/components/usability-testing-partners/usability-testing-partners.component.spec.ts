import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsabilityTestingPartnersComponent } from './usability-testing-partners.component';

describe('UsabilityTestingPartnersComponent', () => {
  let component: UsabilityTestingPartnersComponent;
  let fixture: ComponentFixture<UsabilityTestingPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsabilityTestingPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsabilityTestingPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
