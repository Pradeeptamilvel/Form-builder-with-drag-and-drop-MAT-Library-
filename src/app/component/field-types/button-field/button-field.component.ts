import { Component, input } from '@angular/core';
import { FormField } from '../../../models/field';

@Component({
  selector: 'app-button-field',
  standalone: false,
  templateUrl: './button-field.component.html',
  styleUrl: './button-field.component.scss'
})
export class ButtonFieldComponent {
  field = input.required<FormField>();
}
