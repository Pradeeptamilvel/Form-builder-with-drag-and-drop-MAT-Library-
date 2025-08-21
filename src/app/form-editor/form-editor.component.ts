import { Component } from '@angular/core';
import { FieldTypeService } from '../services/field-type.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-form-editor',
  standalone: false,
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss',
})
export class FormEditorComponent {
  //Injections
  private fieldTypeService = inject(FieldTypeService);

  fieldTypes = this.fieldTypeService.getAllFields();
}
