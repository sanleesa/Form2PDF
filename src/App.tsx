import { Grid, Typography } from "@mui/material";
import DocumentEditor from "./components/DocumentEditor/DocumentEditor";

function App() {
  return (
    <>
      <Grid
        container
        direction={"row"}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid size={12}>
          <Typography variant="h3" align="center">
            Form2PDF
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="body1" align="center">
            Welcome to Form2PDF! This application allows you to easily convert
            your forms into PDF documents. Stay tuned for more features!
          </Typography>
        </Grid>
        <Grid size={12}>
          <DocumentEditor />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
