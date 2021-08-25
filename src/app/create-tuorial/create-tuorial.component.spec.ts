import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTuorialComponent } from './create-tuorial.component';

describe('CreateTuorialComponent', () => {
  let component: CreateTuorialComponent;
  let fixture: ComponentFixture<CreateTuorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTuorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTuorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
