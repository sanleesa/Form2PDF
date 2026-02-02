import { useReducer, useState } from "react";
import { Button, Grid } from "@mui/material";
import dayjs from "dayjs";
import DocumentMetaForm from "../DocumentMetaForm/DocumentMetaForm";
import FieldDesigner from "../FieldDesigner/FieldDesigner";
import type {
  DocumentEditorAction,
  DocumentEditorState,
} from "../../types/DocumentEditorTypes";
import FieldList from "../FieldList/FieldList";

function DocumentEditor() {
  const [metaSubmitted, setMetaSubmitted] = useState(false);

  const initialFormState: DocumentEditorState = {
    meta: {
      title: "",
      description: "",
      date: dayjs(),
      supervisor: "",
    },
    body: {
      fields: [],
      rows: [],
    },
  };

  const formReducer = (state: DocumentEditorState, action: DocumentEditorAction) => {
    switch (action.type) {
      case "SET_TITLE": {
        return {
          ...state,
          meta: {
            ...state.meta,
            title: action.payload,
          },
        };
      }
      case "SET_DESCRIPTION": {
        return {
          ...state,
          meta: {
            ...state.meta,
            description: action.payload,
          },
        };
      }
      case "SET_DATE": {
        return {
          ...state,
          meta: {
            ...state.meta,
            date: action.payload,
          },
        };
      }
      case "SET_SUPERVISOR": {
        return {
          ...state,
          meta: {
            ...state.meta,
            supervisor: action.payload,
          },
        };
      }
      case "ADD_FIELD": {
        return {
          ...state,
          body: {
            ...state.body,
            fields: [...state.body.fields, action.payload],
          },
        };
      }
      case "UPDATE_FIELD": {
        return {
          ...state,
          body: {
            ...state.body,
            fields: state.body.fields.map((field) =>
              field.id === action.id ? { ...field, ...action.patch } : field
            ),
          },
        };
      }
      case "REMOVE_FIELD": {
        return {
          ...state,
          body: {
            ...state.body,
            fields: state.body.fields.filter(
              (field) => field.id !== action.payload
            ),
          },
        };
      }
      default:
        return state;
    }
  };

  const [formState, formStateDispatch] = useReducer(
    formReducer,
    initialFormState
  );

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center">
      <Grid size={12}>
        <DocumentMetaForm
          formState={formState.meta}
          formStateDispatch={formStateDispatch}
          onCreate={() => setMetaSubmitted(true)} />
      </Grid>
      {metaSubmitted && (
        <>
          <Grid size={12}>
            <FieldDesigner
              formState={formState.body.fields}
              formStateDispatch={formStateDispatch} />
          </Grid>
          <Grid size={12}>
            <FieldList
              formState={formState.body.fields}
              formStateDispatch={formStateDispatch} />
          </Grid>
          <Button
            onClick={() => {
              console.log(formState);
            }}
            variant="contained"
            color="secondary">
            Generate PDF
          </Button>
        </>
      )}
    </Grid>
  );
}

export default DocumentEditor;
