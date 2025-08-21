import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-editor',
  standalone: false,
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss',
})
export class FormEditorComponent {
  onDrop(event: CdkDragDrop<string>) {
    if (event.previousContainer.data === 'field-selector') {
      console.log('Dropped in field selector');
      console.log(event);
    }
  }
}
