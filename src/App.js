import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container} from '@mui/material';
import {VegasAttraction} from "./pages/VegasAttraction";
import {NoContent} from "./pages/NoContent";
import {Update} from "./pages/Update";
import {Add} from "./pages/Add";
function App() {

  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VegasAttraction />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NoContent />} />
        </Routes>
      </BrowserRouter>
     
    </Container>
  );
}

export default App;
