export interface FieldTypeDefinition {
  type: string;
  label: string;
  icon: string;
}

export interface FormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
}

export interface FormRow {
  id: string;
  fields: FormField[];
}
