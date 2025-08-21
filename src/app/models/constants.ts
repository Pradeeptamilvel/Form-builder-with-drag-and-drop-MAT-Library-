import { CheckBoxFieldComponent } from '../component/field-types/check-box-field/check-box-field.component';
import { TextFieldComponent } from '../component/field-types/text-field/text-field.component';
import { FieldTypeDefinition } from './field';

export const TEXT_FIELD_DEFINITION: FieldTypeDefinition = {
  type: 'text',
  label: 'Text Field',
  icon: 'text_fields',
  defaultConfig: {
    label: 'Text Field',
    required: false,
  },
  component: TextFieldComponent
};

export const NUMBER_FIELD_DEFINITION: FieldTypeDefinition= {
  type: 'number',
  label: 'Number Field',
  icon: 'straighten',
  defaultConfig: {
    label: 'Number Field',
    required: false,
  },
  component: TextFieldComponent
};

export const CHECKBOX_FIELD_DEFINITION: FieldTypeDefinition = {
  type: 'checkbox',
  label: 'Checkbox Field',
  icon: 'check_box',
  defaultConfig: {
    label: 'Checkbox Field',
    required: false,
  },
  component: CheckBoxFieldComponent
};
