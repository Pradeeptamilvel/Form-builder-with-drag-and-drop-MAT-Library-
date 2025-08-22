import { Component, computed, inject, signal } from '@angular/core';
import { FormService } from '../../services/form.service';
import { AuthService } from '../../services/auth.service';

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
  authService = inject(AuthService);

  // Computed property to check if user is admin
  isAdmin = computed(() => this.authService.isAdmin());

  constructor() {
    // If user is not admin, force preview mode
    if (!this.isAdmin()) {
      this.activeTab.set('preview');
    }
  }
}
