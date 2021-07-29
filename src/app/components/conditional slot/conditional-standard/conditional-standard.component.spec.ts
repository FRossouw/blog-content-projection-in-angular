import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalStandardComponent } from './conditional-standard.component';

describe('ConditionalStandardComponent', () => {
  let component: ConditionalStandardComponent;
  let fixture: ComponentFixture<ConditionalStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
