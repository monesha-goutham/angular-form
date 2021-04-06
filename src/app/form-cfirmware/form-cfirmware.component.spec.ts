import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCFirmwareComponent } from './form-cfirmware.component';

describe('FormCFirmwareComponent', () => {
  let component: FormCFirmwareComponent;
  let fixture: ComponentFixture<FormCFirmwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCFirmwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCFirmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
