import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private _isEditMode = signal<boolean>(true);
  public readonly isEditMode = this._isEditMode.asReadonly();

  toggleMode() {
    this._isEditMode.update(mode => !mode);
  }

  setEditMode(isEdit: boolean) {
    this._isEditMode.set(isEdit);
  }
}
