import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCFirmwareComponent } from './form-cfirmware/form-cfirmware.component';
import { FormIotFirmwareComponent } from './form-iot-firmware/form-iot-firmware.component';

const routes: Routes = [
  {path: "c-firmware-upload", component: FormCFirmwareComponent},
  {path: "iot-firmware-upload", component: FormIotFirmwareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
