import { Injectable } from '@angular/core';
import { TEXT_FIELD_DEFINITION, NUMBER_FIELD_DEFINITION, CHECKBOX_FIELD_DEFINITION } from '../models/constants';
import { FieldType } from '../models/field';

@Injectable({
  providedIn: 'root',
})
export class FieldTypeService {
  fieldTypes = new Map<string, FieldType>([
    ['text', TEXT_FIELD_DEFINITION],
    ['number', NUMBER_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION]
  ]);

  constructor() {}

  getAllFields(): FieldType[] {
    return Array.from(this.fieldTypes.values());
  }

}

