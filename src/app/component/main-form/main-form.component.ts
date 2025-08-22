import { Component, inject, signal } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-main-form',
  standalone: false,
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.scss'
})
export class mainFormComponent {
activeTab = signal<'edit' | 'preview'>('edit');

//Injections
formService = inject(FormService);
}
