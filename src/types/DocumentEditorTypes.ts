import type dayjs from "dayjs";

export type DocumentEditorState = {
  meta: {
    title: string;
    description: string;
    date: dayjs.Dayjs | null;
    supervisor: string;
  };
  body: {
    fields: FieldDefinition[];
    rows: RowData[];
  };
};

export type FieldDefinition = {
  id: string;
  label: string;
  type: "text" | "number" | "date" | "checkbox";
}

export type RowData = Record<string, any>;

export type DocumentEditorAction =
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "SET_DATE"; payload: dayjs.Dayjs | null }
  | { type: "SET_SUPERVISOR"; payload: string }
  | { type: "ADD_FIELD"; payload: FieldDefinition }
  | { type: "UPDATE_FIELD"; id: string; patch: Partial<FieldDefinition> }
  | { type: "REMOVE_FIELD"; payload: string };
