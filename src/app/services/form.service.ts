import { Injectable, signal } from '@angular/core';
import {
  TEXT_FIELD_DEFINITION,
  NUMBER_FIELD_DEFINITION,
  CHECKBOX_FIELD_DEFINITION,
} from '../models/constants';
import { FieldTypeDefinition, FormField, FormRow } from '../models/field';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  fieldTypes = new Map<string, FieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['number', NUMBER_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION],
  ]);

  private _rows = signal<FormRow[]>([]);
  public readonly rows = this._rows.asReadonly();

  constructor() {
    this._rows.set([{ id: crypto.randomUUID(), fields: [] }]);
  }

  getAllFields(): FieldTypeDefinition[] {
    return Array.from(this.fieldTypes.values());
  }

  addField(field: FormField, rowId: string, index?: number){
    const rows = this._rows();
    const newRows = rows.map((row) => {
      if (row.id === rowId) {
        const updatedFields = [...row.fields];
        if (index !== undefined) {
          updatedFields.splice(index, 0, field);
        } else {
          updatedFields.push(field);
        }
        return { ...row, fields: updatedFields };
      }
      return row;
    });
    this._rows.set(newRows);
  }
}
