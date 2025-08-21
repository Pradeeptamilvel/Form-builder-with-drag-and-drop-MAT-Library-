import { Component, Input } from '@angular/core';
import { FieldType } from '../../models/field';

@Component({
  selector: 'app-number-field',
  standalone: false,
  templateUrl: './number-field.component.html',
  styleUrl: './number-field.component.scss',
})
export class NumberFieldComponent {
  @Input() field!: FieldType;

  
}
