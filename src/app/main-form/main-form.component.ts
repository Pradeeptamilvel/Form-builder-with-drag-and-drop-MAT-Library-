import { Component, inject } from '@angular/core';
import { ModeService } from '../services/mode.service';

@Component({
  selector: 'app-main-form',
  standalone: false,
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.scss'
})
export class mainFormComponent {
  private modeService = inject(ModeService);

  isEditMode = this.modeService.isEditMode;

  toggleMode() {
    this.modeService.toggleMode();
  }
}
