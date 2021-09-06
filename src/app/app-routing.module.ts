import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';

const routes: Routes = [
  {
    path: '',
    component: GstGetComponent
  },
  {
    path: 'city-details',
    component: GstEditComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
