import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../../guards/navigation.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements CanComponentDeactivate {
  // This component serves as a container for the form builder layout
  // No additional logic needed as child components handle their own functionality

  canDeactivate(): boolean {
    // Show confirmation when navigating away from dashboard
    return confirm('Are you sure you want to leave? Any unsaved changes may be lost.');
  }
}
