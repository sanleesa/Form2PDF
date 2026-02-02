import { Button, Grid, TextField } from "@mui/material";
import type {
  DocumentEditorAction,
  DocumentEditorState,
} from "../../types/DocumentEditorTypes";
import { useState } from "react";

function FieldDesigner({
  formState,
  formStateDispatch,
}: {
  formState: DocumentEditorState["body"]["fields"];
  formStateDispatch: React.Dispatch<DocumentEditorAction>;
}) {
  const [newFieldLabel, setNewFieldLabel] = useState("");

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={3}
        justifyContent="center"
        alignItems="center">
        <Grid size={6}>
          <TextField
            label="Field Label"
            variant="standard"
            size="small"
            fullWidth
            value={newFieldLabel}
            onChange={(event) => setNewFieldLabel(event.target.value)} />
        </Grid>
        <Grid size={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={newFieldLabel.trim() === ""}
            onClick={() => {
              const newFieldId = `field-${Date.now()}`;
              formStateDispatch({
                type: "ADD_FIELD",
                payload: {
                  id: newFieldId,
                  label: newFieldLabel ? newFieldLabel : "Untitled Field",
                  type: "text",
                },
              });
              setNewFieldLabel("");
            }}>
            Add New Field
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default FieldDesigner;
