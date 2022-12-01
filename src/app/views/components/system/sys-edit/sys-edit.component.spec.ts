import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysEditComponent } from './sys-edit.component';

describe('SysEditComponent', () => {
  let component: SysEditComponent;
  let fixture: ComponentFixture<SysEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
