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
import { FormBuilderComponent } from './component/main-form/form-builder/form-builder.component';
import { mainFormComponent } from './component/main-form/main-form.component';

@NgModule({
  declarations: [
    AppComponent,
    mainFormComponent,
    FormBuilderComponent,
    FormElementsComponent,
    FormControlComponent,
    FieldButtonComponent,
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
