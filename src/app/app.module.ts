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
import { FormControlComponent } from './component/form-control/form-control.component';
import { FieldButtonComponent } from './component/form-elements/field-button/field-button.component';
import { FormElementsComponent } from './component/form-elements/form-elements.component';
import { FormEditorComponent } from './component/main-form/form-builder/form-editor.component';
import { mainFormComponent } from './component/main-form/main-form.component';
import { FormFieldComponent } from './component/main-form/form-field/form-field.component';
import { TextFieldComponent } from './component/field-types/text-field/text-field.component';
import { CheckBoxFieldComponent } from './component/field-types/check-box-field/check-box-field.component';
import { TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    mainFormComponent,
    FormEditorComponent,
    FormElementsComponent,
    FormControlComponent,
    FieldButtonComponent,
    FormFieldComponent,
    TextFieldComponent,
    CheckBoxFieldComponent,
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
    TitleCasePipe
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
