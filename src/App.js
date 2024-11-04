import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./layout";

function App() {
  const theme = createTheme();

  return (
    <div className="max-w-screen-sm md:max-w-full overflow-x-hidden flex flex-col md:flex-row bg-[#edf6f6]">
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
