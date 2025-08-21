import { Component, Input } from '@angular/core';
import { FieldType } from '../../models/field';

@Component({
  selector: 'app-field-button',
  standalone: false,
  templateUrl: './field-button.component.html',
  styleUrl: './field-button.component.scss',
})
export class FieldButtonComponent {
  @Input() fields!: FieldType[];
}
