import { Component, inject } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-elements',
  standalone: false,
  templateUrl: './form-elements.component.html',
  styleUrl: './form-elements.component.scss',
})
export class FormElementsComponent {
  //Injections
  private formService = inject(FormService);

  fieldTypes = this.formService.getAllFields();
}
