import { Box, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import type { DocumentEditorAction, DocumentEditorState } from "../../types/DocumentEditorTypes";

function FieldList({
  formState,
  formStateDispatch,
}: {
  formState: DocumentEditorState["body"]["fields"];
  formStateDispatch: React.Dispatch<DocumentEditorAction>;
}) {
  return (
    <Grid
      container
      direction="column"
      spacing={3}
      justifyContent="center"
      alignItems="center"
    >
      <Grid size={6}>
        <Box sx={{ width: "100%", overflowX: "auto", maxHeight: "50vh" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Field Label</TableCell>
                  <TableCell>Field Type</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formState.map((field) => (
                  <TableRow
                    key={field.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{field.label}</TableCell>
                    <TableCell>{field.type}</TableCell>
                    <TableCell>
                      <DeleteIcon
                        sx={{
                          color: "red",
                          cursor: "pointer",
                          ":hover": { color: "darkred" },
                        }}
                        onClick={() => {
                          formStateDispatch({
                            type: "REMOVE_FIELD",
                            payload: field.id,
                          });
                        }}
                      />
                      <CreateIcon
                        sx={{
                          color: "blue",
                          marginLeft: 2,
                          cursor: "pointer",
                          ":hover": { color: "darkblue" },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
}

export default FieldList;

