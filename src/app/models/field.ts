export interface FieldTypeDefinition {
  type: string;
  label: string;
  icon: string;
}

export interface FieldType {
  id: string;
  type: string;
  label: string;
  required: boolean;
}

export interface FormField {
  id: string;
  fields: FieldType[];
}
