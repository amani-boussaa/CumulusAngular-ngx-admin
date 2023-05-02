import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthlayoutamaniComponent } from './authlayoutamani.component';



@NgModule({
  declarations: [AuthlayoutamaniComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthlayoutamaniModule { }
