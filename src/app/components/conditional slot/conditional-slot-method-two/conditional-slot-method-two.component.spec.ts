import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalSlotMethodTwoComponent } from './conditional-slot-method-two.component';

describe('ConditionalSlotMethodTwoComponent', () => {
  let component: ConditionalSlotMethodTwoComponent;
  let fixture: ComponentFixture<ConditionalSlotMethodTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalSlotMethodTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalSlotMethodTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
