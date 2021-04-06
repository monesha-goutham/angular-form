import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-iot-firmware',
  templateUrl: './form-iot-firmware.component.html',
  styleUrls: ['./form-iot-firmware.component.css']
})
export class FormIotFirmwareComponent implements OnInit {
  iotFirmwareUploadForm = new FormGroup({
    versionName : new FormControl("", [Validators.required,
      Validators.minLength(3)]),
    fileType : new FormControl("", [Validators.required]),
    fileName : new FormControl("", [Validators.required, Validators.minLength(4)]),
    
  })

  


  onSubmit(){
    if (this.iotFirmwareUploadForm.valid && this.iotFirmwareUploadForm.touched){
      console.log(this.iotFirmwareUploadForm.value)
      this.iotFirmwareUploadForm.reset()
      this.iotFirmwareUploadForm.markAsPristine();
      this.iotFirmwareUploadForm.markAsUntouched();
      
    }
   
  }

  onRefresh(){
    this.iotFirmwareUploadForm.reset()
    this.iotFirmwareUploadForm.markAsPristine();
    this.iotFirmwareUploadForm.markAsUntouched();
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
