import { Injectable, signal } from '@angular/core';
import {
  CHECKBOX_FIELD_DEFINITION,
  NUMBER_FIELD_DEFINITION,
  TEXT_FIELD_DEFINITION,
} from '../models/constants';
import { FieldType, FieldTypeDefinition, FormRow } from '../models/field';

@Injectable({
  providedIn: 'root',
})
export class FieldTypeService {
  fieldTypes = new Map<string, FieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['number', NUMBER_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION],
  ]);

  private _rows = signal<FormRow[]>([]);
  public readonly rows = this._rows.asReadonly();

  constructor() {
    this._rows.set([
      {
        id: crypto.randomUUID(),
        fields: [],
      },
    ]);
  }

  getAllFields(): FieldTypeDefinition[] {
    return Array.from(this.fieldTypes.values());
  }

  getFieldType(type: string): FieldTypeDefinition | undefined {
    return this.fieldTypes.get(type);
  }

  addFields(rowId: string, fields: FieldType, index?: number) {
    const row = this._rows();
    const newRow = row.map((r) => {
      if (r.id === rowId) {
        const updatedFields = [...r.fields];
        if (index !== undefined && index >= 0) {
          // Insert at the specified position
          updatedFields.splice(index, 0, fields);
        } else {
          // Always add to the end to maintain sequential order (1,2,3...)
          updatedFields.push(fields);
        }
        return {
          ...r,
          fields: updatedFields,
        };
      }
      return r;
    });
    this._rows.set(newRow);
  }

  removeField(fieldId: string) {
    const row = this._rows();
    const newRow = row.map((r) => ({
      ...r,
      fields: r.fields.filter((f) => f.id !== fieldId),
    }));
    this._rows.set(newRow);
  }
}
