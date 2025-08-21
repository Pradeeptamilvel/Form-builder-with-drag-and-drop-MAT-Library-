import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './main-form/form-builder/form-builder.component';
import { mainFormComponent } from './main-form/main-form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FieldButtonComponent } from './form-elements/field-button/field-button.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormFieldComponent } from './main-form/form-field/form-field.component';
import { TextFieldComponent } from './field-types/text-field/text-field.component';
import { CheckBoxFieldComponent } from './field-types/check-box-field/check-box-field.component';
import { NumberFieldComponent } from './field-types/number-field/number-field.component';

@NgModule({
  declarations: [
    AppComponent,
    mainFormComponent,
    FormBuilderComponent,
    FormElementsComponent,
    FormControlComponent,
    FieldButtonComponent,
    FormFieldComponent,
    TextFieldComponent,
    CheckBoxFieldComponent,
    NumberFieldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
