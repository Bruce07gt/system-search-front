import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSystemComponent } from './create-system.component';

describe('CreateSystemComponent', () => {
  let component: CreateSystemComponent;
  let fixture: ComponentFixture<CreateSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
