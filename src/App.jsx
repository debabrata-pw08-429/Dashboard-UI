import { Box } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";
import MobileNav from "./components/MobileNav/MobileNav";
import AddAssessment from "./components/AddAssessment/AddAssessment";

function App() {
  return (
    <>
      {window.innerWidth <= 390 ? (
        <>
          <MobileNav />
          <AddAssessment />
        </>
      ) : (
        <Box bg="#f6f8fa">
          <Dashboard />
        </Box>
      )}
    </>
  );
}

export default App;
