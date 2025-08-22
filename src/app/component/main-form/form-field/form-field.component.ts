import { Component, computed, inject, input } from '@angular/core';
import { FormField } from '../../../models/field';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-form-field',
  standalone: false,
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
  field = input.required<FormField>();

  // Injection
  formService = inject(FormService);

  // Computed property to check if this field is selected
  isSelected = computed(() =>
    this.formService.selectedFieldId()?.id === this.field().id
  );

  removeField(event: MouseEvent) {
    event.stopPropagation();
    this.formService.deleteField(this.field().id);
  }
}
