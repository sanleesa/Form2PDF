import { Button, Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type {
  DocumentEditorAction,
  DocumentEditorState,
} from "../../types/DocumentEditorTypes";
function DocumentMetaForm({
  formState,
  formStateDispatch,
  onCreate,
}: {
  formState: DocumentEditorState["meta"];
  formStateDispatch: React.Dispatch<DocumentEditorAction>;
  onCreate?: () => void;
}) {
  return (
    <Grid
      container
      direction="column"
      spacing={3}
      justifyContent="center"
      alignItems="center">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid size={3}>
          <TextField
            label="Title"
            value={formState.title}
            variant="standard"
            size="small"
            fullWidth
            onChange={(event) => {
              formStateDispatch({
                type: "SET_TITLE",
                payload: event.target.value,
              });
            }} />
        </Grid>
        <Grid size={4}>
          <TextField
            label="Description"
            value={formState.description}
            variant="standard"
            size="small"
            fullWidth
            onChange={(event) => {
              formStateDispatch({
                type: "SET_DESCRIPTION",
                payload: event.target.value,
              });
            }} />
        </Grid>
        <Grid size={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              slotProps={{
                textField: {
                  variant: "standard",
                  size: "small",
                  fullWidth: true,
                },
              }}
              value={formState.date}
              onChange={(value) => {
                formStateDispatch({
                  type: "SET_DATE",
                  payload: value,
                });
              }} />
          </LocalizationProvider>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            onClick={() => {
              if (onCreate) onCreate();
            }}>
            Create
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DocumentMetaForm;
