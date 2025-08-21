export interface DefaultConfig {
  label: string;
  required: boolean;
}

export interface FieldTypeDefinition {
  type: string;
  label: string;
  icon: string;
  defaultConfig: DefaultConfig;
  component: any;
}

export interface FieldType {
  id: string;
  type: string;
  label: string;
  required: boolean;
}

export interface FormRow {
  id: string;
  fields: FieldType[];
}
