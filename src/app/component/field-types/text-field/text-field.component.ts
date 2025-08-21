import { Component, Input } from '@angular/core';
import { FieldType } from '../../../models/field';
@Component({
  selector: 'app-text-field',
  standalone: false,
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
@Input() field!: FieldType;
}
