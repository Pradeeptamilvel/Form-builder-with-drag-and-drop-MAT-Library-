import { Injectable } from '@angular/core';
import {
  TEXT_FIELD_DEFINITION,
  NUMBER_FIELD_DEFINITION,
  CHECKBOX_FIELD_DEFINITION,
} from '../models/constants';
import { FieldTypeDefinition } from '../models/field';

@Injectable({
  providedIn: 'root',
})
export class FieldTypeService {
  fieldTypes = new Map<string, FieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['number', NUMBER_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION],
  ]);

  constructor() {}

  getAllFields(): FieldTypeDefinition[] {
    return Array.from(this.fieldTypes.values());
  }
}
