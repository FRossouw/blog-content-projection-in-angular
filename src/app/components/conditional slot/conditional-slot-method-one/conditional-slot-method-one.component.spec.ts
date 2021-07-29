import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalSlotMethodOneComponent } from './conditional-slot-method-one.component';

describe('ConditionalSlotMethodOneComponent', () => {
  let component: ConditionalSlotMethodOneComponent;
  let fixture: ComponentFixture<ConditionalSlotMethodOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalSlotMethodOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalSlotMethodOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
