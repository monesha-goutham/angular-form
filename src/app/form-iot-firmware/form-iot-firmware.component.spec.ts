import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIotFirmwareComponent } from './form-iot-firmware.component';

describe('FormIotFirmwareComponent', () => {
  let component: FormIotFirmwareComponent;
  let fixture: ComponentFixture<FormIotFirmwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIotFirmwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIotFirmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
