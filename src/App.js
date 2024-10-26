import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./layout";
import { MenuProvider } from "./context/MenuContext";

function App() {
  const theme = createTheme();

  return (
    <div className="max-w-screen-sm md:max-w-full overflow-x-hidden flex flex-col md:flex-row bg-[#edf6f6]">
      <ThemeProvider theme={theme}>
        <MenuProvider>
          <Layout />
        </MenuProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
