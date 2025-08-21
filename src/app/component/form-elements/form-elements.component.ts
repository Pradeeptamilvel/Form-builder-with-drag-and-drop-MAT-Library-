import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FieldTypeService } from '../../services/field-type.service';

@Component({
  selector: 'app-form-elements',
  standalone: false,
  templateUrl: './form-elements.component.html',
  styleUrl: './form-elements.component.scss',
})
export class FormElementsComponent {
  //Injections
  private fieldTypeService = inject(FieldTypeService);

  fieldTypes = this.fieldTypeService.getAllFields();
}
