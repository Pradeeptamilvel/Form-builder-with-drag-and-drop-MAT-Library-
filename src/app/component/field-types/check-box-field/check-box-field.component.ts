import { Component, Input } from '@angular/core';
import { FieldType } from '../../../models/field';
@Component({
  selector: 'app-check-box-field',
  standalone: false,
  templateUrl: './check-box-field.component.html',
  styleUrl: './check-box-field.component.scss'
})
export class CheckBoxFieldComponent {
@Input() field!: FieldType;
}
