import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators}from '@angular/forms';


@Component({
  selector: 'app-form-cfirmware',
  templateUrl: './form-cfirmware.component.html',
  styleUrls: ['./form-cfirmware.component.css']
})
export class FormCFirmwareComponent implements OnInit {

  cFirmwareUploadForm = new FormGroup({
    versionName : new FormControl("", [Validators.required,
      Validators.minLength(3)]),
    serverIp : new FormControl("", [Validators.required]),
    userName : new FormControl("", [Validators.required, Validators.minLength(4)]),
    password : new FormControl("", [Validators.required, Validators.minLength(8)]),
    filePath : new FormControl("", [Validators.required]),
    fileSize : new FormControl("", [Validators.required]),
    releaseNote : new FormControl("", [Validators.required]),
  })

  


  onSubmit(){
    if (this.cFirmwareUploadForm.valid && this.cFirmwareUploadForm.touched){
      console.log(this.cFirmwareUploadForm.value)
      this.cFirmwareUploadForm.reset()
      this.cFirmwareUploadForm.markAsPristine();
      this.cFirmwareUploadForm.markAsUntouched();
      
    }
   
  }

  onRefresh(){
    this.cFirmwareUploadForm.reset()
    this.cFirmwareUploadForm.markAsPristine();
    this.cFirmwareUploadForm.markAsUntouched();
    
  }

  constructor() { }

  ngOnInit(): void {

  }

}
