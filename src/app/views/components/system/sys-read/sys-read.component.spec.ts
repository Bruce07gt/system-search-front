import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysReadComponent } from './sys-read.component';

describe('SysReadComponent', () => {
  let component: SysReadComponent;
  let fixture: ComponentFixture<SysReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
