import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalSlotMethodTwoSlotComponent } from './conditional-slot-method-two-slot.component';

describe('ConditionalSlotMethodTwoSlotComponent', () => {
  let component: ConditionalSlotMethodTwoSlotComponent;
  let fixture: ComponentFixture<ConditionalSlotMethodTwoSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalSlotMethodTwoSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalSlotMethodTwoSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
