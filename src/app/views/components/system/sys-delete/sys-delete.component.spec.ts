import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDeleteComponent } from './sys-delete.component';

describe('SysDeleteComponent', () => {
  let component: SysDeleteComponent;
  let fixture: ComponentFixture<SysDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
