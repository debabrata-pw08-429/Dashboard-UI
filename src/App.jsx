import { Box } from "@chakra-ui/react";
import MobileNav from "./components/mobileNav/MobileNav";
import AddAssessment from "./components/AddAssessment/AddAssessment";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <>
      {window.innerWidth <= 420 ? (
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
