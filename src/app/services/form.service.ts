import { computed, Injectable, signal } from '@angular/core';
import {
  TEXT_FIELD_DEFINITION,
  CHECKBOX_FIELD_DEFINITION,
  SELECT_FIELD_DEFINITION,
  RADIO_FIELD_DEFINITION,
  DATE_FIELD_DEFINITION,
} from '../models/constants';
import { FieldTypeDefinition, FormField, FormRow } from '../models/field';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  fieldTypes = new Map<string, FieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['select', SELECT_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION],
    ['radio', RADIO_FIELD_DEFINITION],
    ['date', DATE_FIELD_DEFINITION],
  ]);

  getFieldType(type: string): FieldTypeDefinition | undefined {
    return this.fieldTypes.get(type);
  }

  private _rows = signal<FormRow[]>([]);
  private _selectedFieldId = signal<string | null>(null);

  public readonly rows = this._rows.asReadonly();
  public readonly selectedFieldId = computed(() =>
    this._rows()
      .flatMap((row) => row.fields)
      .find((field) => field.id === this._selectedFieldId())
  );

  constructor() {
    this._rows.set([{ id: crypto.randomUUID(), fields: [] }]);
  }

  printValues(a:any){
    console.log(a);
  }
  getAllFields(): FieldTypeDefinition[] {
    return Array.from(this.fieldTypes.values());
  }

  addField(field: FormField, rowId: string, index?: number) {
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
  deleteField(fieldId: string) {
    const rows = this._rows();
    const newRows = rows.map((row) => {
      const updatedFields = row.fields.filter((f) => f.id !== fieldId);
      return { ...row, fields: updatedFields };
    });
    this._rows.set(newRows);
  }

  addRow() {
    const newRow: FormRow = { id: crypto.randomUUID(), fields: [] };
    this._rows.set([...this._rows(), newRow]);
  }

  deleteRow(rowId: string) {
    const rows = this._rows();
    if (rows.length > 1) {
      const newRows = rows.filter((row) => row.id !== rowId);
      this._rows.set(newRows);
    }
  }

  moveField(
    fieldId: string,
    sourceRowId: string,
    targetRowId: string,
    targetIndex: number = -1
  ) {
    const rows = this._rows();
    let fieldToMove: FormField | undefined;
    let sourceRowIndex = -1;
    let sourceFieldIndex = -1;

    rows.forEach((row, rowIndex) => {
      if (row.id === sourceRowId) {
        sourceRowIndex = rowIndex;
        sourceFieldIndex = row.fields.findIndex((f) => f.id === fieldId);
        if (sourceFieldIndex >= 0) {
          fieldToMove = row.fields[sourceFieldIndex];
        }
      }
    });

    if (!fieldToMove) {
      return;
    }

    const newRows = [...rows];
    const fieldsWithRemoveField = newRows[sourceRowIndex].fields.filter(
      (f) => f.id !== fieldId
    );
    newRows[sourceRowIndex].fields = fieldsWithRemoveField;

    const targetRowIndex = newRows.findIndex((row) => row.id === targetRowId);
    if (targetRowIndex >= 0) {
      const targetFields = [...newRows[targetRowIndex].fields];
      targetFields.splice(targetIndex, 0, fieldToMove);
      newRows[targetRowIndex].fields = targetFields;
    }
    this._rows;
  }

  setSelectedField(fieldId: string | null) {
    this._selectedFieldId.set(fieldId);
  }

  updateField(fieldId: string, data: Partial<FormField>) {
    const rows = this._rows();
    const newRows = rows.map((row) => {
      return {
        ...row,
        fields: row.fields.map((field) => {
          if (field.id === fieldId) {
            return { ...field, ...data };
          }
          return field;
        }),
      };
    });
    this._rows.set(newRows);
  }

}
