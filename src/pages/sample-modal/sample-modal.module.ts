import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleModal } from './sample-modal';

@NgModule({
  declarations: [
    SampleModal,
  ],
  imports: [
    IonicPageModule.forChild(SampleModal),
  ],
})
export class SampleModalModule {}
