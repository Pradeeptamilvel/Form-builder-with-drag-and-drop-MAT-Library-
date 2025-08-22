import { Component, inject } from '@angular/core';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-form-preview',
  standalone: false,
  templateUrl: './form-preview.component.html',
  styleUrl: './form-preview.component.scss'
})
export class FormPreviewComponent {
//Injections
formService = inject(FormService);
}
