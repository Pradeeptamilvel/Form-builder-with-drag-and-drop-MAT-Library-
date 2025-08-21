import { Component, computed, inject, input } from '@angular/core';
import { FieldType } from '../../../models/field';
import { FieldTypeService } from '../../../services/field-type.service';
import { ModeService } from '../../../services/mode.service';
@Component({
  selector: 'app-form-field',
  standalone: false,
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
  field = input.required<FieldType>();
  index = input.required<number>();

  //Injection
  fieldTypeService = inject(FieldTypeService);
  modeService = inject(ModeService);

  isEditMode = this.modeService.isEditMode;

  previewComponent = computed(() => {
    const type = this.fieldTypeService.getFieldType(this.field().type);
    return type?.component || null;
  });

  removeField(field: FieldType) {
    this.fieldTypeService.removeField(field.id);
  }
}
