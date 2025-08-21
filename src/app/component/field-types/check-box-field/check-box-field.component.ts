import { Component, input } from '@angular/core';
import { FormField } from '../../../models/field';

@Component({
  selector: 'app-check-box-field',
  standalone: false,
  templateUrl: './check-box-field.component.html',
  styleUrl: './check-box-field.component.scss'
})
export class CheckBoxFieldComponent {
field = input.required<FormField>(); 
}
