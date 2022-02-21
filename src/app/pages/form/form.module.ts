import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    EditorModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
  ]
})
export class FormModule { }
