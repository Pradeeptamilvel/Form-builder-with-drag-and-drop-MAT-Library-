import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, inject, Input } from '@angular/core';
import { FieldTypeService } from '../../services/field-type.service';
import { FieldType } from '../../models/field';

@Component({
  selector: 'app-form-builder',
  standalone: false,
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
})
export class FormBuilderComponent {
  @Input() isEditMode: boolean = true;

  //Injections
  fieldTypeService = inject(FieldTypeService);

  onDrop(event: CdkDragDrop<string>, rowId: string) {
    if (!this.isEditMode) return; // Prevent drop in view mode

    const fieldType = event.item.data;
    const newField: FieldType = {
      id: crypto.randomUUID(),
      type: fieldType.type,
      ...fieldType.defaultConfig,
     };

    // When adding new fields (not reordering), always add to the end
    if (event.previousContainer.data === 'field-selector') {
      this.fieldTypeService.addFields(rowId, newField);
    } else {
      // When reordering existing fields, use the specified index
      this.fieldTypeService.addFields(rowId, newField, event.currentIndex);
    }
  }
}
