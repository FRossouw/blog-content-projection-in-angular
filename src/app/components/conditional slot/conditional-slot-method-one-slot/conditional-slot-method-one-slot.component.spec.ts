import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalSlotMethodOneSlotComponent } from './conditional-slot-method-one-slot.component';

describe('ConditionalSlotMethodOneSlotComponent', () => {
  let component: ConditionalSlotMethodOneSlotComponent;
  let fixture: ComponentFixture<ConditionalSlotMethodOneSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalSlotMethodOneSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalSlotMethodOneSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
