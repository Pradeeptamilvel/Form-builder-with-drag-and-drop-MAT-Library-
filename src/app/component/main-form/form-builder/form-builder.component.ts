import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  standalone: false,
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
})
export class FormBuilderComponent {
  onDrop(event: CdkDragDrop<string>) {
    if (event.previousContainer.data === 'field-selector') {
      console.log('Dropped in field selector');
      console.log(event);
    }
  }
}
